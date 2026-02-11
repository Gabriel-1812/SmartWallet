import {z} from 'zod'

export const createUserSchema = z.object({
    name: z.string().min(1),
    email: z.string().regex(/^\S+@\S+\.\S+$/, 'Email inválido'),
    password: z.string().min(6)
})