import { db } from "@/db";
import { users } from "@/db/schema";
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

  static createUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user: typeof users.$inferInsert = {
      name,
      email,
    };
    try {
      const newUser = await db.insert(users).values(user);
      logger.info("Inserted user");
      return res
        .status(StatusCodes.CREATED)
        .json(
          new ApiResponse(StatusCodes.CREATED, { newUser }, "User Created!!")
        );
    } catch (error) {
      logger.error(error);
      throw new ApiError(StatusCodes.NO_CONTENT, "Error creating user");
    }
  });
  static findAll = asyncHandler(async (req: Request, res: Response) => {
    try {
      const result = await db.select().from(users);
      return res
        .status(StatusCodes.ACCEPTED)
        .json(
          new ApiResponse(StatusCodes.CREATED, { result }, "User Returned!!")
        );
    } catch (error) {
      logger.error(error);
      throw new ApiError(StatusCodes.NO_CONTENT, "Error returning user");
    }
  });
}

export { userController };
