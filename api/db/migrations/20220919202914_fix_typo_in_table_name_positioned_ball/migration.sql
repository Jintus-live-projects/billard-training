/*
  Warnings:

  - You are about to drop the `PositionnedBall` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PositionnedBall" DROP CONSTRAINT "PositionnedBall_ballId_fkey";

-- DropForeignKey
ALTER TABLE "PositionnedBall" DROP CONSTRAINT "PositionnedBall_layoutId_fkey";

-- DropTable
DROP TABLE "PositionnedBall";

-- CreateTable
CREATE TABLE "PositionedBall" (
    "id" SERIAL NOT NULL,
    "row" INTEGER NOT NULL,
    "column" INTEGER NOT NULL,
    "ballId" INTEGER NOT NULL,
    "layoutId" INTEGER NOT NULL,

    CONSTRAINT "PositionedBall_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PositionedBall" ADD CONSTRAINT "PositionedBall_ballId_fkey" FOREIGN KEY ("ballId") REFERENCES "Ball"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PositionedBall" ADD CONSTRAINT "PositionedBall_layoutId_fkey" FOREIGN KEY ("layoutId") REFERENCES "Layout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
