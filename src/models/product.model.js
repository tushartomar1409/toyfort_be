const queries = require("../queries/product.query.js");
const { executeDbQuery } = require("../config/deafult.config.js");

async function brandProduct(brand) {
  try {
    const rows = await executeDbQuery(queries.brandProduct, [brand]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function productDetails(slug) {
  try {
    const rows = await executeDbQuery(queries.getProductDetails, [slug]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function productOnDiscount(discount) {
  try {
    const rows = await executeDbQuery(queries.getProductOnDiscount, [discount]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function productOnAge(age) {
  try {
    const rows = await executeDbQuery(queries.getProductOnAge, [age]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function sideBarFilter(category) {
  try {
    const rows = await executeDbQuery(queries.sideBarFilter, [category]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function sideBarBrandFilter(category, brand) {
  try {
    const rows = await executeDbQuery(queries.sideBarBrandFilter, [
      category,
      brand,
    ]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getBrandName() {
  try {
    const rows = await executeDbQuery(queries.getBrandName);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function brandProducts(brand) {
  try {
    const rows = await executeDbQuery(queries.brandProduct, [brand]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getCharacterName() {
  try {
    const rows = await executeDbQuery(queries.getCharacterName);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function filterProductByChar(character) {
  try {
    const rows = await executeDbQuery(queries.getCharacterProduct, [character]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function filterProductByGender(gender) {
  try {
    const rows = await executeDbQuery(queries.productByGender, [gender]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function filterProductByPrice(min, max) {
  try {
    const rows = await executeDbQuery(queries.productByPrice, [min, max]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function productOutofStock() {
  try {
    const rows = await executeDbQuery(queries.productByOutofStock);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function productInStock() {
  try {
    const rows = await executeDbQuery(queries.productInStock);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function filterProductBysubCategory(subCategory) {
  try {
    const rows = await executeDbQuery(
      queries.getSubCategoryProduct(subCategory)
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getOutdoorProd(toys) {
  try {
    const rows = await executeDbQuery(queries.outdoorProducts, [toys]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  brandProduct,
  productDetails,
  productOnDiscount,
  productOnAge,
  sideBarFilter,
  sideBarBrandFilter,
  getBrandName,
  brandProducts,
  getCharacterName,
  filterProductByChar,
  filterProductByGender,
  filterProductByPrice,
  productOutofStock,
  productInStock,
  filterProductBysubCategory,
  getOutdoorProd,
};
