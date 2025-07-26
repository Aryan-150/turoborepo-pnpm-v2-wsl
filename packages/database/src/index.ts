import { PrismaClient } from "./generated/client/client";

export const prisma = new PrismaClient();
export * from "./generated/client/client";