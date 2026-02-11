import { userRepository } from "./user.repository";

type CreateUserDTO = {
    name: string;
    email: string;
    password: string
}

export const userService = {
    createUser: async (data: CreateUserDTO) => {
        return userRepository.create(data)
    }
}