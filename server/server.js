import path from "path";
import express from "express";
import dotenv, { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config({ path: "./config/config.env" });

connectDB();

// R0utes
import productsRoute from "./routes/products.js";
import salesRoute from "./routes/sales.js";
import purchaseRoute from "./routes/purchase.js";
import standbyRoutes from "./routes/standby.js";

// Express app
const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

if (process.env.NODE_ENV === "Devlopment") {
  app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });
}

// Routes
app.use("/api/products", productsRoute);
app.use("/api/sales", salesRoute);
app.use("/api/purchases", purchaseRoute);
app.use("/api/standby", standbyRoutes);

const Port = process.env.PORT;

app.listen(
  Port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${Port}`)
);
