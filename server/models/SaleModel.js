import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    Product_Name: {
      type: String,
      trim: true,
      required: [true, "Product name is required! "],
    },
    Customer: {
      type: String,
      trim: true,
      required: [true, "Customer Name is required! "],
    },
    Quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    StandBy: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sale", saleSchema);
