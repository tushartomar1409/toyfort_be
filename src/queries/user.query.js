const users = `SELECT id, username, email, created_at FROM users`;

const getSliderImages = `SELECT id, link, image FROM slider`;

const bookImages = `SELECT product_id, image_default FROM images`;

const blogImages = `SELECT bc.name as category_name, bc.slug as category_slug,YEAR(bp.created_at) as year_val, MONTH(bp.created_at) as month_val, bp.* from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id ORDER BY bp.created_at DESC`;

const blogContent = `
  SELECT bc.name AS category_name,bc.slug AS category_slug,bp.id,bp.image_default,bp.content FROM blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id WHERE bp.id = ? AND bc.slug = ? ORDER BY bp.created_at DESC`;

const blogRelatedImages = `SELECT bc.name as category_name, bc.slug as category_slug,YEAR(bp.created_at) as year_val, MONTH(bp.created_at) as month_val, bp.* from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id ORDER BY RAND() LIMIT 3`;

const checkCartProductExist = `SELECT * FROM cart WHERE title = ? AND user_id = ?`;

const addProductToCart = `INSERT INTO cart (user_id, image, title, original_price, discounted_price, slug) VALUES (?,?,?,?,?,?)`;

const getCartProduct = `SELECT * FROM cart WHERE user_id = ?`;

const getCartItemBySlug = ` SELECT * FROM cart WHERE slug = ?`;

const deleteCartItem = ` DELETE FROM cart WHERE slug = ?`;

const getProductQuantityBySlug = `SELECT quantity FROM cart WHERE slug = ?`;

const updateProductQuantityBySlug = `UPDATE cart SET quantity = ? WHERE slug = ?`;

const insertIntoWishlist = `
  INSERT INTO wishlists (user_id, image, title, original_price, discounted_price, slug, discount)
  VALUES (?, ?, ?, ?, ?, ?, ?)`;

const getWishlistByUserId = `SELECT * FROM wishlists WHERE user_id = ?`;

const getWishlistItemByTitle = `SELECT * FROM wishlists WHERE title = ? AND user_id = ?`;

const getWishlistItemBySlug = ` SELECT * FROM wishlists WHERE slug = ?`;

const deleteWishlistItemBySlug = `DELETE FROM wishlists WHERE slug = ?`;

module.exports = {
  users,
  getSliderImages,
  bookImages,
  blogImages,
  blogContent,
  blogRelatedImages,
  checkCartProductExist,
  addProductToCart,
  getCartProduct,
  getCartItemBySlug,
  deleteCartItem,
  getProductQuantityBySlug,
  updateProductQuantityBySlug,
  insertIntoWishlist,
  getWishlistByUserId,
  getWishlistItemByTitle,
  getWishlistItemBySlug,
  deleteWishlistItemBySlug,
};
