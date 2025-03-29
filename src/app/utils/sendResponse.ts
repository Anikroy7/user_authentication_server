import { Response } from "express";
import { access } from "fs";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  token?: string;
  accessToken?: string;
  refreshToken?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    statusCode: data?.statusCode,
    success: data.success,
    message: data.message,
    data: data.data,
    refreshToken: data.token,
    accessToken: data.token,
  });
};

export default sendResponse;
