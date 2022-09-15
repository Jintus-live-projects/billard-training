-- DropForeignKey
ALTER TABLE "Layout" DROP CONSTRAINT "Layout_trainingBlocId_fkey";

-- DropForeignKey
ALTER TABLE "PositionedBall" DROP CONSTRAINT "PositionedBall_ballId_fkey";

-- DropForeignKey
ALTER TABLE "PositionedBall" DROP CONSTRAINT "PositionedBall_layoutId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingBloc" DROP CONSTRAINT "TrainingBloc_trainingId_fkey";

-- AddForeignKey
ALTER TABLE "PositionedBall" ADD CONSTRAINT "PositionedBall_ballId_fkey" FOREIGN KEY ("ballId") REFERENCES "Ball"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PositionedBall" ADD CONSTRAINT "PositionedBall_layoutId_fkey" FOREIGN KEY ("layoutId") REFERENCES "Layout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Layout" ADD CONSTRAINT "Layout_trainingBlocId_fkey" FOREIGN KEY ("trainingBlocId") REFERENCES "TrainingBloc"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingBloc" ADD CONSTRAINT "TrainingBloc_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE CASCADE ON UPDATE CASCADE;
