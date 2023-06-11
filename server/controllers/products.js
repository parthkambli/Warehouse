import mongoose from "mongoose";
import Product from "../models/ProductsModel.js";

// -----------------------------------------------------------------------------------------------
// @desc - Get all products
// @route - GET /api/products
// -----------------------------------------------------------------------------------------------
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ Product_Name: 1 });
    return res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// -----------------------------------------------------------------------------------------------
// @desc - get search products
// @route - GET /api/products/:searchKey
// -----------------------------------------------------------------------------------------------
export const search = async (req, res) => {
  const { searchKey } = req.params;
  try {
    const regex = new RegExp(searchKey, "i"); // Create case-insensitive regular expression
    const products = await Product.find({ Product_Name: regex }).sort({
      Product_Name: 1,
    });
    return res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};
// -----------------------------------------------------------------------------------------------
// @desc - Get a single product
// @rout - GET /api/products/:id
// -----------------------------------------------------------------------------------------------
export const getPrroduct = async (req, res) => {
  const { id } = req.params;
  try {
    // Check for mongoose valide id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, error: "Product Not Found" });
    }

    const product = await Product.findById(id);

    // Check for existence of product
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product Not Found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// -----------------------------------------------------------------------------------------------
// @desc - Create/Add new product
// @route - POST /api/products
// -----------------------------------------------------------------------------------------------
export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({
      success: true,
      data: product,
      message: "Product Added Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: Object.values(error.errors).map((val) => val.message),
      });
    } else if (error.code === 11000) {
      return res
        .status(400)
        .json({ success: false, error: "Product name must be unique!" });
    } else {
      return res
        .status(500)
        .json({ success: false, error: "Server Error", Error: error });
    }
  }
};

// -----------------------------------------------------------------------------------------------
// @desc - Edit a product
// @route - PATCH /api/products/:id
// -----------------------------------------------------------------------------------------------
export const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    // checking for emptyfields
    if (req.body.Product_Name === "") {
      return res
        .status(400)
        .json({ success: false, error: "Product name is required! " });
    }

    // Check for mongoose valide id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, error: "Product Not Found" });
    }

    const product = await Product.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );

    // Check for existence of product
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product Not Found! " });
    }

    const updatedProduct = await Product.findById(id); // get updated Product in res(not required; just for my convenience)
    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product Edited Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: Object.values(error.errors).map((val) => val.message),
      });
    } else if (error.code === 11000) {
      return res
        .status(400)
        .json({ success: false, error: "Product name must be unique!" });
    } else {
      return res
        .status(500)
        .json({ success: false, error: "Server Error", Error: error });
    }
  }
};

// -----------------------------------------------------------------------------------------------
// @desc - Delete a product
// @route - DELETE /api/product/:id
// -----------------------------------------------------------------------------------------------
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    // Check for mongoose valide id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, error: "Product Not Found" });
    }

    const product = await Product.findByIdAndDelete({ _id: id });

    // Check for existence of product
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
      message: "Product Deleted Successfully",
    });
  }
};
