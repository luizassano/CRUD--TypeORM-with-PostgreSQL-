import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { IUserCreate } from "../interfaces/user"
import bcrypt from "bcrypt"

const createUserService = async (name: string, email: string, password: string, age: number): Promise<IUserCreate> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password, 10)
    user.age = age
    user.created_at = new Date()
    user.updated_at = new Date()

    userRepository.create(user)
    await userRepository.save(user)

    return {...user, password: undefined}
}

export default createUserService