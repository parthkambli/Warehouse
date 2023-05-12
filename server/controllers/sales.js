import mongoose from "mongoose";
import Product from "../models/ProductsModel.js";
import Sale from "../models/SaleModel.js";

// ----------------------------------------------------------------------------------------
// @desc - get all sales record
// @route - GET /api/sales
// ----------------------------------------------------------------------------------------
export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find({}).sort({ createdAt: -1 });
    return res
      .status(200)
      .json({ success: true, count: sales.length, data: sales });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// ----------------------------------------------------------------------------------------
// @desc - Sale product
// @route - POST /api/sales
// ----------------------------------------------------------------------------------------
export const saleProduct = async (req, res) => {
  try {
    // Searching the product
    const product = await Product.findOne({
      Product_Name: req.body.Product_Name,
    });

    // checking the existence of product
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    // condition to sale less then 0 product
    if (req.body.Quantity <= 0) {
      return res
        .status(400)
        .json({ success: false, error: "You canot sell 0 or less product" });
    }

    // checking the Qty of product
    if (product.Quantity - req.body.Quantity < 0) {
      return res
        .status(400)
        .json({ success: false, error: "Not enough quantity" });
    }

    // Creating sale
    const sale = await Sale.create(req.body);

    // Updating the product quantity
    await Product.findByIdAndUpdate(
      { _id: product._id },
      { $inc: { Quantity: -req.body.Quantity } }
    );

    return res.status(200).json({ success: true, data: sale });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: Object.values(error.errors).map((val) => val.message),
      });
    } else {
      return res.status(500).json({ success: false, error: "Server Error" });
    }
  }
};

// ----------------------------------------------------------------------------------------
// @desc - Delete Sale
// @route - DELETE /api/sales/:id
// ----------------------------------------------------------------------------------------
export const deleteSale = async (req, res) => {
  const { id } = req.params;
  try {
    // Check for mongoose valide id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, error: "Sale Record Not Found" });
    }

    // Delete sale
    const sale = await Sale.findByIdAndDelete({ _id: id });

    // Check for existence of sale
    if (!sale) {
      return res
        .status(404)
        .json({ success: false, error: "Sale Record Not Found" });
    }

    res.status(200).json({ success: true, data: sale });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};
