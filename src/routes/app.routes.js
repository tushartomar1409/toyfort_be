const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
const productController = require("../controllers/product.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Get all users
router.get("/", userController.getAllUsers);

// Login Route
router.post("/login", authController.loginUser);

// Register Route
router.post("/register", authController.registerUser);

// Landing page slider images route
router.get("/slider", userController.getSliderImage);

// Books images
router.get("/book_images", userController.bookImages);

// Blog images route
router.get("/blog_images", userController.blogImages);

// Individual Blog content
router.get("/blog/:category_slug/:id", userController.blogContent);

// Blog related images
router.get("/related-posts", userController.blogRelatedImages);

// Brand Product
router.get("/brand-products", productController.brandProducts);

// Add to cart
router.post("/addToCart", authMiddleware, userController.addToCart);

// Get product from cart
router.get(
  "/user/getCartProducts",
  authMiddleware,
  userController.getCartProducts
);

// Remove product from cart
router.delete(
  "/removeProduct/:slug",
  authMiddleware,
  userController.removeFromCart
);

// Add to wishlist
router.post("/add", authMiddleware, userController.addToWishlist);

// Remove from wishlist
router.delete(
  "/remove/:slug",
  authMiddleware,
  userController.removeFromWishlist
);

// Get product from wishlist
router.get("/user/wishlist", authMiddleware, userController.getWishlist);

// Increase product quantity
router.post(
  "/increaseProductQuantity/:slug",
  userController.increaseProductQuantity
);

// Decrease product quantity
router.post(
  "/decreaseProductQuantity/:slug",
  userController.decreaseProductQuantity
);

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
});

// Get brand names
router.get("/getbrand/name", productController.getBrand);

// filter product by brand name
router.get("/brandProducts/products", productController.getBrandProduct);

// Get character names
router.get("/products/characters", productController.getCharacter);

// Filter product by character name
router.get(
  "/characterProducts/products",
  productController.getCharacterProduct
);

// filter product by gender
router.get("/products/gender", productController.productByGender);

// filter product by price
router.get("/products/filter-by-price", productController.filterProductByPrice);

// Out-of-stock products
router.get("/stock-products/out-stock", productController.productOutOfStock);

// Product in-stock
router.get("/stock-products/in-stock", productController.productInStock);

// Filter product by subcategory
router.get(
  "/category/:category/:subcategory",
  productController.getSubCategoryProduct
);

// Filter to get outdoor-game products
router.get("/toys/:toys", productController.getOutdoorProducts);

module.exports = router;
