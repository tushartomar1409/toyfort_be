const brandProduct = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where attribute2_value = ? AND images.is_main = 1 ORDER BY image_default DESC`;

const getProductDetails = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.slug = ? ORDER BY images.image_default DESC`;

const getProductOnDiscount = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.attribute3_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC`;

const getProductOnAge = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.attribute1_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC`;

const sideBarFilter = `SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where categories.slug= ? AND images.is_main = 1 ORDER BY images.image_default DESC;`;

const sideBarBrandFilter = `SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE categories.slug = ? AND attribute2_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC;`;

const getBrandName = `SELECT distinct attribute2_value from products order by attribute2_value ASC`;

const getBrandProduct = `SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where  attribute2_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC;`;

const getCharacterName = `SELECT distinct attribute5_value from products order by attribute5_value ASC`;

const getCharacterProduct = `SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where  attribute5_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC;`;

const productByGender = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.attribute4_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC`;

const productByPrice = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.price between  ? AND ? AND images.is_main = 1  ORDER BY images.image_default DESC`;

const productByOutofStock = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.stock = 0 AND images.is_main = 1 ORDER BY images.image_default DESC`;

const productInStock = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.stock > 0 AND images.is_main = 1 ORDER BY images.image_default DESC`;

const getSubCategoryProduct = `SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where  categories.slug= ? AND images.is_main = 1 ORDER BY images.image_default DESC`;

const outdoorProducts = `SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where  categories.slug= ? AND images.is_main = 1 ORDER BY images.image_default DESC;`;

module.exports = {
  brandProduct,
  getProductDetails,
  getProductOnDiscount,
  getProductOnAge,
  sideBarFilter,
  sideBarBrandFilter,
  getBrandName,
  getBrandProduct,
  getCharacterName,
  getCharacterProduct,
  productByGender,
  productByPrice,
  productByOutofStock,
  productInStock,
  getSubCategoryProduct,
  outdoorProducts,
};
