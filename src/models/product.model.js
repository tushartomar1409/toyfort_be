const queries = require('../queries/product.query.js');
const { executeDbQuery } = require('../config/deafult.config.js');

async function brandProduct(brand) {
  try {
    const rows = await executeDbQuery(queries.brandProduct, [brand]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    brandProduct
}