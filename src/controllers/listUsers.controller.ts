import { Request, Response } from "express"
import listUsersService from "../services/listUsers.service"

const listUsersController = async (req: Request, res: Response) => {
    try {
        const response = await listUsersService()

        return res.send(response)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default listUsersController