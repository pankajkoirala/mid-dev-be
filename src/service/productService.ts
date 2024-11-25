import { HTTP_STATUS_INTERNAL_SERVER_ERROR } from "./../config/appConstant";
import {
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_SERVICE_UNAVAILABLE,
} from "../config/appConstant";
import axiosClient from "../config/httpClientConfig";
import { CustomError } from "../Exception/customException";

export const getAllProduct = async (req: any, res: any, next: any) => {
  axiosClient
    .get(`products`)
    .then((data: any) => data.data)
    .then((data: any) => res.send({ message: "successful",success: true, payload: data }))
    .catch(
      (error: Error) =>
        new CustomError(
          "Product list not found",
          HTTP_STATUS_INTERNAL_SERVER_ERROR
        )
    );
};

export const getproductById = (req: any, res: any, next: any) => {
  axiosClient
    .get(`products/${req?.params?.id}`)
    .then((data: any) => data.data)
    .then((data: any) => res.send({ message: "successful",success: true, payload: data }))
    .catch(
      (error: Error) =>
        new CustomError(
          `Product with id ${req?.params?.id} not found`,
          HTTP_STATUS_NOT_FOUND
        )
    );
};

export const addProduct = (req: any, res: any, next: any) => {
  try {
    // Ensure a file is present
    if (!req.file) {
      return res.status(400).send({ error: "No file uploaded." });
    }

    // Send response with file details
    res.status(200).send({
      message: "File uploaded successfully",
      filePath: `/public/uploads/${req.file.filename}`,
    });
  } catch (error) {
    next(error);
  }
};