/*
  Warnings:

  - You are about to drop the column `hashtag` on the `hashtags` table. All the data in the column will be lost.
  - Added the required column `name` to the `hashtags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hashtags" DROP COLUMN "hashtag",
ADD COLUMN     "name" TEXT NOT NULL;
