/*
  Warnings:

  - You are about to drop the column `name` on the `hashtags` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hashtag]` on the table `hashtags` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hashtag` to the `hashtags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hashtags" DROP COLUMN "name",
ADD COLUMN     "hashtag" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "hashtags_hashtag_key" ON "hashtags"("hashtag");