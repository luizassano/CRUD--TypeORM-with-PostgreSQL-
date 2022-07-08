import { Response, Request } from "express";
import createUserService from "../services/createUser.service";
import { IUser } from "../interfaces/user";
const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const response = await createUserService(name, email, password, age)

    return res.status(201).send(response)
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message
      });
    }
  }
};

export default createUserController;