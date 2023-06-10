import mongoose from "mongoose";
import Product from "../models/ProductsModel.js";
import Purchase from "../models/PurchaseModel.js";

// ----------------------------------------------------------------------------------------
// @desc - get all purchase record
// @route - GET /api/purchases
// ----------------------------------------------------------------------------------------
export const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find({}).sort({ createdAt: -1 });
    return res
      .status(200)
      .json({ success: true, count: purchases.length, data: purchases });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// ----------------------------------------------------------------------------------------
// @desc - Purchase product
// @route - POST /api/purchases

// ----------------------------------------------------------------------------------------
export const purchaseProduct = async (req, res) => {
  try {
    // Search the product
    let product = await Product.findOne({
      Product_Name: req.body.Product_Name,
    });

    // condition to purchase less then 0 product
    if (req.body.Quantity <= 0) {
      return res.status(400).json({
        success: false,
        error: "Please enter appropriate Quantity! ",
      });
    }

    // Creating purchase
    const purchase = await Purchase.create(req.body);

    // Create a new product if it doesn't exist and the purchase is successfully created
    if (!product && purchase) {
      product = await Product.create(req.body);
    } else {
      // Updating the product quantity
      await Product.findByIdAndUpdate(
        { _id: product._id },
        { $inc: { Quantity: +req.body.Quantity } }
      );
    }
    return res.status(200).json({
      success: true,
      data: purchase,
      message: "Added Purchase Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: Object.values(error.errors).map((val) => val.message),
      });
    } else {
      return res
        .status(500)
        .json({ success: false, error: "Server Error", Err: error.message });
    }
  }
};
// ----------------------------------------------------------------------------------------
// @desc - Delete Purchase
// @route - DELETE /api/purchases/:id
// ----------------------------------------------------------------------------------------
export const deletePurchase = async (req, res) => {
  const { id } = req.params;
  try {
    // Check for mongoose valide id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, error: "Sale Record Not Found" });
    }

    // Delete purchase
    const purchase = await Purchase.findByIdAndDelete({ _id: id });

    // Check for existence of sale
    if (!purchase) {
      return res
        .status(404)
        .json({ success: false, error: "Purchase record not found" });
    }

    res.status(200).json({
      success: true,
      data: purchase,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};
