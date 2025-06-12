const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", decoded);

    req.user = decoded;
    // console.log("Decode id: ",decoded.id);

    if (!token) {
      return res.status(401).json({
        status: "error",
        message: "No authentication token provided",
      });
    }
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      status: "error",
      message: "Authentication failed",
    });
  }
};

module.exports = authMiddleware;
