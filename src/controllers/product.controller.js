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
    console.log("Slug",slug);

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

    const rows = await model.productOnDiscount(discount)

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

    const rows = await model.productOnAge(age)

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.sideBarFilter = async (req, res) => {
  try {
    const { category } = req.params;

    const rows = await model.sideBarFilter(category)
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

    const rows = await model.sideBarBrandFilter(category,brand)

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBrand = async (req, res) => {
  try {
    
    const rows = await model.getBrandName()
    console.log(rows)

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};


exports.getBrandProduct = async (req, res) => {
  try {
    const brand = req.query.brand;
    console.log(brand);

    const rows = await model.brandProducts(brand)

    console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};
