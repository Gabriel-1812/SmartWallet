import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";
import { prisma } from "../../prisma/client";


export const authService = {
    login: async (email: string, password: string) => {
        const user = await prisma.user.findUnique ({
            where: {email}
        })
        
        if(!user) {
            throw new Error("Invalid credentials")
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Invalid credentials")
        }

        const token = jwt.sign(
            { userId: user.id},
            "secret",
            { expiresIn : "4s"}
        )

    return {token}


    }
}