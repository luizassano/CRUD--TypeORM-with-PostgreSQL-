import updateUserService from "../services/updateUser.service"
import { Request, Response } from "express"

const updateUserController = (req: Request, res: Response) => {
    try {

        const {name, email, password , age } = req.body
        const { id } = req.params

        const response = updateUserService(id, name, email, password, age)

        return res.status(200).json({ message: response})
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({
                error: err.name,
                message: err.message
            })
        }
    }
}

export default updateUserController