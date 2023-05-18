/*
  Warnings:

  - You are about to drop the column `userId` on the `Offer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_userId_fkey";

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "userId";
