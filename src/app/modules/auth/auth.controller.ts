import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import { createToken } from "./auth.utils";
import config from "../../config";
import passport from "passport";


const loginUser = catchAsync(async (req, res, next) => {
  passport.authenticate("local", { session: false }, async (err: any, user: any, info: any) => {
    if (err || !user) {
      return res.status(401).json({
        success: false,
        message: info?.message || "Authentication failed",
      });
    }

    const jwtPayload = {
      userId: user._id,
      email: user.email,
      role: user.role,
    };

    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expires_in as string
    );

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string
    );

    res.json({
      success: true,
      message: "User login successful",
      accessToken,
      refreshToken,
     
    });
  })(req, res, next);
});


const refreshToken = catchAsync(async (req, res) => {
  const token = req.headers.cookie?.split(" ")[1] as string;
  const result = await AuthServices.refreshToken(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token retrieved successfully!',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  refreshToken
};
