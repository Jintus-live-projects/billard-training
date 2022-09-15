/*
  Warnings:

  - A unique constraint covering the columns `[layoutId]` on the table `TrainingBloc` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TrainingBloc_layoutId_key" ON "TrainingBloc"("layoutId");
