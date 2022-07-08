import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"

const verifyEmailMiddleware = async (req: Request, res: Response, next: any) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const { email } = req.body

    const verify = users.find((user) => user.email === email) 

    if (verify) {
        return res.status(400).json({
            message: "Email alredy exists"
        })
    }
    next()
}

export default verifyEmailMiddleware