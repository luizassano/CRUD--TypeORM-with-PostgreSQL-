import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import bcrypt from "bcrypt"

const updateUserService = async (id: string ,name: string, email: string, password: string, age: number) => {
    const userRepository = AppDataSource.getRepository(User) 
    
    const user = await userRepository.findOneBy({id})

    if (!user) {
        throw new Error("User not found")
    }

    name && (user.name = name)
    email && (user.email = email)
    age && (user.age = age)
    password && (user.password = bcrypt.hashSync(password, 10))

    await userRepository.update(id, {...user, updated_at: new Date()})

    return true
}

export default updateUserService