import { db } from "@/db";
import { todos } from "@/db/schema";
import { logger } from "@/log/log";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class todoController {
  static createtodo = asyncHandler(async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const todo: typeof todos.$inferInsert = {
      title,
      content,
    };
    try {
      const newtodo = await db.insert(todos).values(todo);
      logger.info("Inserted user");
      return res
        .status(StatusCodes.CREATED)
        .json(new ApiResponse(StatusCodes.CREATED, { todo }, "Todo Created!!"));
    } catch (error) {
      console.log(error);
      throw new ApiError(StatusCodes.NO_CONTENT, "Error creating Todo");
    }
  });
  static getAll = asyncHandler(async (req: Request, res: Response) => {
    try {
      const users = await db.select().from(todos);
      return res.status(200).json({ users: users });
    } catch (error) {
      console.log(error);
      throw new ApiError(StatusCodes.NO_CONTENT, "Error creating Todo");
    }
  });
}

export { todoController };
