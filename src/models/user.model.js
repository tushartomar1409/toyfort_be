const { pool } = require("../config/db.config");
const queries = require("../queries/user.query.js");
const { executeDbQuery } = require("../config/deafult.config.js");

async function findAll() {
  try {
    const rows = await executeDbQuery(queries.users);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getSlider() {
  try {
    const rows = await executeDbQuery(queries.getSliderImages);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getbookImages() {
  try {
    const rows = await executeDbQuery(queries.bookImages);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getblogImages() {
  try {
    const rows = await executeDbQuery(queries.blogImages);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getBlogContent(id, category_slug) {
  try {
    const rows = await executeDbQuery(queries.blogContent, [id, category_slug]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getRelatedBlogImages() {
  try {
    const rows = await executeDbQuery(queries.blogRelatedImages);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function checkCartProduct(title, userId) {
  try {
    const rows = await executeDbQuery(queries.checkCartProductExist, [
      title,
      userId,
    ]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addToCart(
  userId,
  imageUrl,
  title,
  originalPrice,
  discountedPrice,
  slug
) {
  try {
    const rows = await executeDbQuery(queries.addProductToCart, [
      userId,
      imageUrl,
      title,
      originalPrice,
      discountedPrice,
      slug,
    ]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getCartProd(userId) {
  try {
    const rows = await executeDbQuery(queries.getCartProduct, [userId]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function findCartItemBySlug(slug) {
  return await executeDbQuery(queries.getCartItemBySlug, [slug]);
}

async function deleteCartItem(slug) {
  return await executeDbQuery(queries.deleteCartItem, [slug]);
}

async function getQuantity(slug) {
  const result = await executeDbQuery(queries.getProductQuantityBySlug, [slug]);
  return result[0]?.quantity || 0;
}

async function updateQuantity(slug, quantity) {
  return await executeDbQuery(queries.updateProductQuantityBySlug, [
    quantity,
    slug,
  ]);
}

async function addToWishlist(userId, imageUrl, title, originalPrice, discountedPrice, slug, discount) {
  return await executeDbQuery(queries.insertIntoWishlist, [
    userId,
    imageUrl,
    title,
    originalPrice,
    discountedPrice,
    slug,
    discount,
  ]);
}

async function getWishlistItemsByUser(userId) {
  return await executeDbQuery(queries.getWishlistByUserId, [userId]);
}

async function getWishlistItemByTitle(title, userId) {
  return await executeDbQuery(queries.getWishlistItemByTitle, [title, userId]);
}

async function getWishlistItemBySlug(slug) {
  return await executeDbQuery(queries.getWishlistItemBySlug, [slug]);
}

async function removeWishlistItem(slug) {
  return await executeDbQuery(queries.deleteWishlistItemBySlug, [slug]);
}




module.exports = {
  findAll,
  getSlider,
  getbookImages,
  getblogImages,
  getBlogContent,
  getRelatedBlogImages,
  checkCartProduct,
  addToCart,
  getCartProd,
  findCartItemBySlug,
  deleteCartItem,
  getQuantity,
  updateQuantity,
  addToWishlist,
  getWishlistItemsByUser,
  getWishlistItemByTitle,
  getWishlistItemBySlug,
  removeWishlistItem,
};
