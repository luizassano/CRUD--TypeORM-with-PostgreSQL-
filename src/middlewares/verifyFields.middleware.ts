import { Request, Response } from "express"

const verifyFieldsMiddleware = (req: Request, res: Response, next: any) => {
    
    const { email, name, age, password } = req.body

    if (!email || !name || !age || !password) {
        return res.status(400).json({
            error: "error"
        })
    }

    if (email === '') {
        res.status(400).json({
            message: "Email not found"
        })
    } 

    if (name === '') {
        res.status(400).json({
            message: "Name not found"
        })
    }

    if (age === '') {
        res.status(400).json({
            message: "Age not found"
        })
    }

    if (password === '') {
        res.status(400).json({
            message: "Password not found"
        })
    }

    next()
}

export default verifyFieldsMiddleware