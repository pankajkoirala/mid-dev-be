import express from "express";
import { router as productRouter } from "./../modules/product/product_route.js";
const router = express.Router();

router.use("/product", productRouter);
export { router };
