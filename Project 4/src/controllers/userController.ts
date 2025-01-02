import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { logger } from "@/log/log";
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
    const { name, email, age } = req.body;
    const user: typeof usersTable.$inferInsert = {
      name,
      email,
      age,
    };
    try {
      const newUser = await db.insert(usersTable).values(user);
      logger.info("Inserted user");
      return res
        .status(StatusCodes.CREATED)
        .json(
          new ApiResponse(StatusCodes.CREATED, { newUser }, "User Created!!")
        );
    } catch (error) {
      console.log(error);
      throw new ApiError(StatusCodes.NO_CONTENT, "Error creating user");
    }
  });
}

export { userController };
