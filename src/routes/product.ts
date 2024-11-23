import express from "express";
import { getAllProduct, getproductById } from "../service/productService";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getproductById);

export { router };
