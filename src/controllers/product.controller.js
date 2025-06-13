const model = require("../models/product.model");

exports.brandProducts = async (req, res) => {
  try {
    const { brand } = req.query;

    const rows = await model.brandProduct(brand);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.productDetails = async (req, res) => {
  try {
    console.log("Received params:", req.params);

    const { slug } = req.params;
    console.log("Slug", slug);

    const rows = await model.productDetails(slug);

    // console.log(rows[0]);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.productDiscount = async (req, res) => {
  try {
    const { discount } = req.query;
    // console.log(discount)

    const rows = await model.productOnDiscount(discount);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.productFilterByAge = async (req, res) => {
  try {
    const { age } = req.query;
    // console.log(age)

    const rows = await model.productOnAge(age);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.sideBarFilter = async (req, res) => {
  try {
    const { category } = req.params;

    const rows = await model.sideBarFilter(category);
    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.sideBarBrandFilter = async (req, res) => {
  try {
    const category = req.params.category;
    const brand = req.query.brand;

    const rows = await model.sideBarBrandFilter(category, brand);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBrand = async (req, res) => {
  try {
    const rows = await model.getBrandName();
    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.getBrandProduct = async (req, res) => {
  try {
    const brand = req.query.brand;
    console.log(brand);

    const rows = await model.brandProducts(brand);

    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.getCharacter = async (req, res) => {
  try {
    const rows = await model.getCharacterName();
    // console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.getCharacterProduct = async (req, res) => {
  try {
    const character = req.query.character;
    console.log(character);

    const rows = await model.filterProductByChar(character);

    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.productByGender = async (req, res) => {
  try {
    const { gender } = req.query;
    console.log(gender);

    const [rows] = await model.filterProductByGender(gender);
    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.filterProductByPrice = async (req, res) => {
  const p_min = req.query.p_min;
  const p_max = req.query.p_max;

  try {
    const [rows] = await model.filterProductByPrice(p_min * 100, p_max * 100);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.productOutOfStock = async (req, res) => {
  try {
    const [rows] = await model.productOutofStock();

    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.productInStock = async (req, res) => {
  try {
    const [rows] = await model.productInStock();

    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

exports.getSubCategoryProduct = async (req, res) => {
  try {
    const { subcategory } = req.params;

    // console.log("Sub-category: ", subcategory);

    const [rows] = await model.filterProductBysubCategory(subcategory);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the product", error);
  }
};

exports.getOutdoorProducts = async (req, res) => {
  try {
    const { toys } = req.params;

    const [rows] = await model.getOutdoorProd(toys);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the product", error);
  }
};
