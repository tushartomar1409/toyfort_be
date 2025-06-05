const model = require('../models/user.model');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await model.findAll();
    return res.status(200).json({
      status: 'success',
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Failed to fetch users'
    });
  }
};