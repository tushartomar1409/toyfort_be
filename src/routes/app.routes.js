const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

// Get all users
router.get('/', userController.getAllUsers);

// Login Route
router.post('/login', authController.loginUser);

// Register Route
router.post('/register', authController.registerUser);

// Landing page slider images route 
router.get('/slider',userController.getSliderImage)

// Books images
router.get('/book_images',userController.bookImages)

// Blog images route
router.get('/blog_images',userController.blogImages)

// Individual Blog content
router.get('/blog/:category_slug/:id',userController.blogContent)

// Blog related images
router.get("/related-posts", userController.blogRelatedImages);

// 

module.exports = router; 