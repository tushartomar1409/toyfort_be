const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
// const authController = require('../controllers/auth.controller');

// Get all users
router.get('/', userController.getAllUsers);
// Login Route
// router.post('/login', authController.loginUser);

// Register Route
// router.post('/register', authController.registerUser);

module.exports = router; 