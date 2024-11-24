import express from "express";
import { addProduct, getAllProduct, getproductById } from "../service/productService";
import { upload } from "../middleware/fileUploader";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", upload.single("file"), addProduct);
router.get("/:id", getproductById);

export { router };
