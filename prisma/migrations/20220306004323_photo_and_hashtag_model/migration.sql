-- CreateTable
CREATE TABLE "photos" (
    "id" TEXT NOT NULL,
    "file" TEXT,
    "photoOutputUrl" TEXT,
    "caption" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hashtags" (
    "id" TEXT NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hashtags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PhotosHashtagsRelation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PhotosHashtagsRelation_AB_unique" ON "_PhotosHashtagsRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotosHashtagsRelation_B_index" ON "_PhotosHashtagsRelation"("B");

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotosHashtagsRelation" ADD FOREIGN KEY ("A") REFERENCES "hashtags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotosHashtagsRelation" ADD FOREIGN KEY ("B") REFERENCES "photos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
