import mongoose from "mongoose";
import Product from "../models/ProductsModel.js";
import StandBy from "../models/StandByModel.js";

// ------------------------------------------------------------------------------
// @desc - get all standby
// @route - GET /api/standby
// ------------------------------------------------------------------------------
export const getStandBy = async (req, res) => {
  try {
    const standby = await StandBy.find({}).sort({ createdAt: -1 });
    return res
      .status(200)
      .json({ success: true, count: standby.length, data: standby });
  } catch (error) {
    return res.status.json({ success: false, error: "Server Error" });
  }
};

// ------------------------------------------------------------------------------
// @desc - add standby
// @route - POST /api/stanfby
// ------------------------------------------------------------------------------
export const addStandBy = async (req, res) => {
  try {
    // Searching the product
    const product = await Product.findOne({
      Product_Name: req.body.Product_Name,
    });

    // checking the existence of product
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found! " });
    }

    // condition to standby less then 0 product
    if (req.body.Quantity <= 0) {
      return res
        .status(400)
        .json({ success: false, error: "Please enter appropriate Quantity! " });
    }

    // checking the Spare qty of product
    if (product.Spare - req.body.Quantity < 0) {
      return res
        .status(400)
        .json({
          success: false,
          error: "Not enough product in spare! Please check inventory",
        });
    }

    // Create standby
    const standby = await StandBy.create(req.body);

    // Updating the spare quantity
    await Product.findByIdAndUpdate(
      { _id: product._id },
      { $inc: { Spare: -req.body.Quantity } }
    );

    return res
      .status(200)
      .json({
        success: true,
        data: standby,
        message: "Added Stand_By Successfully",
      });
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

// ------------------------------------------------------------------------------
// @desc - delete standby
// @rroute - DELETE /api/standby/:id
// ------------------------------------------------------------------------------
export const deleteStandBy = async (req, res) => {
  const { id } = req.params;
  try {
    // Check for mongoose valide id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, error: "Standby Record Not Found" });
    }

    // search standby
    const standBy = await StandBy.findById({ _id: id });

    // search product
    const product = await Product.findOne({
      Product_Name: standBy.Product_Name,
    });

    // Delete standby
    const standby = await StandBy.findByIdAndDelete({ _id: id });

    // Checking for existence of standby
    if (!standby) {
      return res
        .status(404)
        .json({ success: false, error: "StandBy Record Not Found" });
    }

    // Updating the product
    await Product.findByIdAndUpdate(
      { _id: product._id },
      { $inc: { Spare: +standby.Quantity } }
    );

    res
      .status(200)
      .json({
        success: true,
        data: standby,
      });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};
