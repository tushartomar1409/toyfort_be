const brandProduct = `SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where attribute2_value = ? AND images.is_main = 1 ORDER BY image_default DESC`


module.exports = {
    brandProduct
}