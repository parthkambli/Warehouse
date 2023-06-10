import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    Product_Name: {
      type: String,
      trim: true,
      unique: [true, "Product Name must be unique! "],
      required: [true, "Product name is required! "],
    },
    Quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    Spare: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
