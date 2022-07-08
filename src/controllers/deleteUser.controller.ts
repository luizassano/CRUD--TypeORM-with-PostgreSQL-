import { Request, Response } from "express"
import deleteUserService from "../services/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const response = await deleteUserService(id)

        return res.json({
            message: "User deleted"
        })
    } catch (err) {
        if (err instanceof Error) {
            return res.json({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default deleteUserController