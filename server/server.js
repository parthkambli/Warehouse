import path from "path";
import express from "express";
import dotenv, { config } from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({ path: "./config/config.env" });

connectDB();

import productsRoute from "./routes/products.js";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "Devlopment") {
  app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });
}

app.use("/api/products", productsRoute);

const Port = process.env.PORT;

app.listen(
  Port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${Port}`)
);
