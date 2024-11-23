import express from "express";
import { router as productRouter } from "./product";
const router = express.Router();

// all routes in applicaion
router.use("/product", productRouter);

export { router };
