import { db } from "@/db";
import { logger } from "@/logger";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class userController {
  static status = asyncHandler(async (req: Request, res: Response) => {
    try {
      return res
        .status(StatusCodes.OK)
        .json(new ApiResponse(200, {}, "Server is healthy!!"));
    } catch (error) {
      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Failed to get status of server"
      );
    }
  });
}

export { userController };
