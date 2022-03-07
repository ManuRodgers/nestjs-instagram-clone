/*
  Warnings:

  - Made the column `file` on table `photos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "photos" ALTER COLUMN "file" SET NOT NULL;
