import { prisma } from "../../prisma/client";

type CreateUserData = {
  name: string;
  email: string;
  password: string;
};

export const userRepository = {
  create: (data: CreateUserData) => {
    return prisma.user.create({ data });
  },
};