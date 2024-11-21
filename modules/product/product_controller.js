import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });


import { axiosService } from "../../utils/axiosService.js";

const getAll = async (req, res, next) => {
  try {
    const data = await axiosService("https://dummyjson.com/products")
    
    res.json({ message: "successful",success: true, payload: data?.data });
   

    //  Block of code to try
  } catch (err) {
    res.json({ message: "Error",success: false, errors: err?.message,payload:null });
  }
};

const getById = async (req, res, next) => {
  const id=req?.params?.id
  try {
    const data = await axiosService(`https://dummyjson.com/products/${id}`)
    res.json({ message: "successful",success: true, payload: data?.data });
  } catch (err) {
    res.json({ message: "Error",success: false, errors: err?.message,payload:null });
  }
};

export {
  getById,
  getAll
};
