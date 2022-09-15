/*
  Warnings:

  - You are about to drop the column `layoutId` on the `TrainingBloc` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[trainingBlocId]` on the table `Layout` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `trainingBlocId` to the `Layout` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TrainingBloc" DROP CONSTRAINT "TrainingBloc_layoutId_fkey";

-- DropIndex
DROP INDEX "TrainingBloc_layoutId_key";

-- AlterTable
ALTER TABLE "Layout" ADD COLUMN     "trainingBlocId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TrainingBloc" DROP COLUMN "layoutId";

-- CreateIndex
CREATE UNIQUE INDEX "Layout_trainingBlocId_key" ON "Layout"("trainingBlocId");

-- AddForeignKey
ALTER TABLE "Layout" ADD CONSTRAINT "Layout_trainingBlocId_fkey" FOREIGN KEY ("trainingBlocId") REFERENCES "TrainingBloc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
