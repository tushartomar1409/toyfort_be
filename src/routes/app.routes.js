const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const productController = require('../controllers/product.controller')
const authMiddleware = require('../middleware/auth.middleware')

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

// Brand Product

router.get("/brand-products", productController.brandProducts);

// Add to cart

router.post("/addToCart", authMiddleware, userController.addToCart);

// Product details

router.get("/:slug", productController.productDetails);

// Product filter by discount
router.get("/products/discount", productController.productDiscount);

// Product filter by age
router.get("/products/age", productController.productFilterByAge);


// SideBar category filter

router.get("/category/:category", (req, res) => {
  if (req.query.brand) {
    return productController.sideBarBrandFilter(req, res);
  } else {
    return productController.sideBarFilter(req, res);
  }
}) 

// Get brand names

router.get("/getbrand/name", productController.getBrand)

router.get("/brandProducts/products", productController.getBrandProduct)






module.exports = router; 