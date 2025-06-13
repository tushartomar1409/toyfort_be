const model = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Match user entered password to hashed password in database
async function matchPassword(dbPassword, enteredPassword) {
  if (!dbPassword) {
    throw new Error("dbPassword is null");
  }
  const fixedHash = dbPassword.replace(/^\$2y\$/, "$2b$");
  return await bcrypt.compare(enteredPassword, fixedHash);
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

exports.registerUser = async (req, res) => {
  try {
    console.log("Req:", req.body);

    const { fName, lName, email, password, confirmPassword } = req.body;
    let { phone } = req.body;

    // Check if required fields are provided
    const errors = {};

    // Validate name
    if (!fName || fName.trim() === "" || !lName || lName.trim() === "") {
      errors.name = "fName and lName is required";
    }
    // Validate phone
    const phoneRegex = /^[6-9]\d{9}$/;
    phone = String(phone);
    if (!phone || phone.trim() === "") {
      errors.phone = "Phone number is required";
    } else if (phone.length > 10) {
      errors.phone = "Phone number must be at most 10 characters";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone number must be a valid Indian number";
    }
    // Validate email
    if (!email || email.trim() === "") {
      errors.email = "Email address is required";
    } else if (email.length > 255) {
      errors.email = "Email must be at most 255 characters";
    }

    // Validate password
    if (!password || password.trim() === "") {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    } else if (password.length > 255) {
      errors.password = "Password must be at most 255 characters";
    }

    // Validate confirm_password
    if (!confirmPassword || confirmPassword.trim() === "") {
      errors.confirmPassword = "Password confirmation is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Check if any errors
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    // Check if user already exists
    const userExists = await model.findUser(email);
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    console.log("HashedPassword:", hashedPassword);

    const user = await model.createUser({
      fName,
      lName,
      email,
      password: hashedPassword,
      phone,
    });

    // console.log("User",user);

    const token = generateToken(user._id);
    user.jwtToken = token;
    // user.save();

    if (user) {
      res.status(201).json({
        success: true,
        data: {
          _id: user.id,
          name: user.first_name,
          email: user.email,
          phone: user.phone,
          password: hashedPassword,
          role: user.role || "user",
          token,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid user data",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message || "Unknown error",
    });
  }
};

// @desc    Login user
// @route   POST /api/users/login
// @access  Public

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide an email and password",
      });
    }

    // Check for user
    const user = await model.findUser(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // Check password
    const isMatch = await matchPassword(user.password, password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user.id);

    res.status(201).json({
      success: true,
      data: {
        _id: user.id,
        name: user.username,
        email: user.email,
        role: user.role_id,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error,
    });
  }
};
