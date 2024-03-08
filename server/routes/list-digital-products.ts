import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    return await prisma.product.findMany();
  } catch (error) {
    throw error;
  }
});