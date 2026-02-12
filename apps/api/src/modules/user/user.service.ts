import { userRepository } from "./user.repository";

export const userService = {
    createUser: async (data:{name:string; email: string; password:string})=> {
        return userRepository.create(data)
    },

    listUsers: async() => {
        return userRepository.findAll()
    },

    getUserById: async(id:string) => {
        return userRepository.findById(id)
    }
}