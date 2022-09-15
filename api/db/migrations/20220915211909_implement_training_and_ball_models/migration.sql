-- CreateEnum
CREATE TYPE "BallType" AS ENUM ('CUE_BALL', 'COLORED_BALL', 'NUMBERED_BALL');

-- CreateEnum
CREATE TYPE "TrainingBlocType" AS ENUM ('TABLE_LAYOUT', 'RICH_TEXT');

-- CreateTable
CREATE TABLE "TrainingTag" (
    "name" TEXT NOT NULL,

    CONSTRAINT "TrainingTag_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Ball" (
    "id" SERIAL NOT NULL,
    "type" "BallType" NOT NULL,
    "color" TEXT,
    "number" INTEGER,

    CONSTRAINT "Ball_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PositionnedBall" (
    "id" SERIAL NOT NULL,
    "row" INTEGER NOT NULL,
    "column" INTEGER NOT NULL,
    "ballId" INTEGER NOT NULL,
    "layoutId" INTEGER NOT NULL,

    CONSTRAINT "PositionnedBall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Layout" (
    "id" SERIAL NOT NULL,
    "gridRowLevel" INTEGER NOT NULL,
    "gridColumnLevel" INTEGER NOT NULL,

    CONSTRAINT "Layout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingBloc" (
    "id" SERIAL NOT NULL,
    "type" "TrainingBlocType" NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT,
    "layoutId" INTEGER,
    "trainingId" INTEGER NOT NULL,

    CONSTRAINT "TrainingBloc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TrainingToTrainingTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TrainingBloc_title_key" ON "TrainingBloc"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Training_name_key" ON "Training"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_TrainingToTrainingTag_AB_unique" ON "_TrainingToTrainingTag"("A", "B");

-- CreateIndex
CREATE INDEX "_TrainingToTrainingTag_B_index" ON "_TrainingToTrainingTag"("B");

-- AddForeignKey
ALTER TABLE "PositionnedBall" ADD CONSTRAINT "PositionnedBall_ballId_fkey" FOREIGN KEY ("ballId") REFERENCES "Ball"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PositionnedBall" ADD CONSTRAINT "PositionnedBall_layoutId_fkey" FOREIGN KEY ("layoutId") REFERENCES "Layout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingBloc" ADD CONSTRAINT "TrainingBloc_layoutId_fkey" FOREIGN KEY ("layoutId") REFERENCES "Layout"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingBloc" ADD CONSTRAINT "TrainingBloc_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrainingToTrainingTag" ADD CONSTRAINT "_TrainingToTrainingTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Training"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrainingToTrainingTag" ADD CONSTRAINT "_TrainingToTrainingTag_B_fkey" FOREIGN KEY ("B") REFERENCES "TrainingTag"("name") ON DELETE CASCADE ON UPDATE CASCADE;
