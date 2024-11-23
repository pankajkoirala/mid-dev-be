import { HTTP_STATUS_NOT_FOUND } from "../config/appConstant";
import axiosClient from "../config/httpClientConfig";
import { CustomError } from "../Exception/customException";

export const getAllProduct = async (req: any, res: any, next: any) => {
  const data = await axiosClient.get("products");
  if (!data) {
    return next(new CustomError("Product not found", HTTP_STATUS_NOT_FOUND));
  }

  return res.send({ message: "successful",success: true, payload: data?.data })
};

export const getproductById = async (req: any, res: any, next: any) => {
  try {
    const data = await axiosClient.get(`products/${req?.params?.id}`);
    return res.send({ message: "successful",success: true, payload: data?.data })
  } catch (error) {
    return next(
      new CustomError(
        `Product with id ${req?.params?.id} not found`,
        HTTP_STATUS_NOT_FOUND
      )
    );
  }
};
