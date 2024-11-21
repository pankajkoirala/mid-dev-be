import express from "express";
import {
  getById,
  getAll,
} from "./product_controller.js";
const router = express.Router();

router.get("/all", getAll);
router.get("/:id", getById);


export { router };
