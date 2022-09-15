/*
  Warnings:

  - The `color` column on the `Ball` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "BallColor" AS ENUM ('YELLOW', 'RED');

-- AlterTable
ALTER TABLE "Ball" DROP COLUMN "color",
ADD COLUMN     "color" "BallColor";
