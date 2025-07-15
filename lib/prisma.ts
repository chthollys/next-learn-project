import { PrismaClient } from "@/generated/prisma/client";

declare global {
  // allow global `var` declarations
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"], // Optional: Log all queries
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
