const model = require("../models/product.model");


exports.brandProducts = async (req, res) => {
  try {
    const { brand } = req.query;
    console.log(brand);

    const rows = await model.brandProduct(brand);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
