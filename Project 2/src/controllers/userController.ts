import "dotenv/config";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { StatusCodes } from "http-status-codes";
import { drizzle } from "drizzle-orm/mysql2";

import { Request, Response } from "express";
import { usersTable } from "@/db/schema";
import { db } from "@/db";

class userController {
  static createUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, age, email } = req.body;
    const user: typeof usersTable.$inferInsert = {
      name,
      email,
      age,
    };
    try {
      const users = await db.insert(usersTable).values(user);
      console.log("New user created!");
      return res
        .status(StatusCodes.CREATED)
        .json(
          new ApiResponse(StatusCodes.CREATED, { users }, "User Created!!")
        );
    } catch (error) {
      console.error(error);
      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Something went wrong when creating a new user"
      );
    }
  });

  static deleteAllUser = asyncHandler(async (req: Request, res: Response) => {
    try {
      await db.delete(usersTable);
      console.log("All users deleted!");
      return res
        .status(StatusCodes.NO_CONTENT)
        .json(
          new ApiResponse(StatusCodes.NO_CONTENT, {}, "All users deleted!!")
        );
    } catch (error) {
      console.error(error);
      throw new ApiError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Something went wrong when deleting all users"
      );
    }
  });

}

export { userController };
