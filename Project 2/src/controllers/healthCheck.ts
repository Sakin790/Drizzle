import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
const status = asyncHandler(async (req: Request, res: Response) => {
  try {
    return res
      .status(StatusCodes.OK)
      .json(new ApiResponse(200, {}, "Server is healthy!!"));
  } catch (error) {
    console.error("Failed to get status of server", error);
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Failed to get status of server"
    );
  }
});

export { status };

//http://localhost:3000/api/v1/health
