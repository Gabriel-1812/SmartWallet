import { userRepository } from "./user.repository";
import bcrypt from "bcrypt";

export const userService = {

    createUser: async (data:{name:string; email: string; password:string})=> {

        const hashedPassword = await bcrypt.hash(data.password, 10)

        return userRepository.create({
            ...data,
            password: hashedPassword
        })
    },

    listUsers: async() => {
        return userRepository.findAll()
    },

    getUserById: async(id:string) => {
        return userRepository.findById(id)
    }
}