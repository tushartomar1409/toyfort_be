const model = require("../models/user.model");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await model.findAll();
    return res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch users",
    });
  }
};

// Slider Images
exports.getSliderImage = async (req, res) => {
  try {
    const users = await model.getSlider();
    return res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch users",
    });
  }
};

// Get books images

exports.bookImages = async (req, res) => {
  try {
    const users = await model.getbookImages();
    return res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch users",
    });
  }
};

// Get blog images

exports.blogImages = async (req, res) => {
  try {
    const users = await model.getblogImages();
    return res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch users",
    });
  }
};



// Get blog content

exports.blogContent = async (req, res) => {
  const { id, category_slug } = req.params;

  try {
    const rows = await model.getBlogContent(id, category_slug);

    if (rows.length === 0) {
      return res.status(404).json({ error: "No blog found" });
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error in fetching content:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get blog related images

exports.blogRelatedImages = async (req, res) => {
  try {
    const users = await model.getRelatedBlogImages();
    return res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch users",
    });
  }
};
