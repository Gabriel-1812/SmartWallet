import { prisma } from "../../prisma/client";

export const userRepository = {
  create: (data: { name: string; email: string; password: string }) => {
    return prisma.user.create({ data })
  },

findAll: () => {
    return prisma.user.findMany()
  },

  findById: (id:string) =>{
    return prisma.user.findUnique({where:{id}})
  }
}

