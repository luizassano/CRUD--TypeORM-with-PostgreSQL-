import captureUserService from "../services/captureUser.service";
import { Request, Response } from "express";

const captureUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await captureUserService(id);

    return res.status(200).json(response)
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default captureUserController;