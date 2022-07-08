import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"

const verifyIdMiddleware = async (req: Request, res: Response, next: any) => {
    
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()
    const { id } = req.params

    const verify = users.find((user) => user.id === id)

    if (!verify) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    next()
}

export default verifyIdMiddleware