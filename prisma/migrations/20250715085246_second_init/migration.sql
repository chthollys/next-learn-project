/*
  Warnings:

  - You are about to drop the `Meal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_creatorId_fkey";

-- DropTable
DROP TABLE "Meal";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "meals" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "creator_email" TEXT NOT NULL,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "meals_slug_key" ON "meals"("slug");
