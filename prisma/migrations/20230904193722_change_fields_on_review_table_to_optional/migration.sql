-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT,
    "beerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Review_beerId_fkey" FOREIGN KEY ("beerId") REFERENCES "Beer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("Title", "beerId", "content", "createdAt", "id", "userId") SELECT "Title", "beerId", "content", "createdAt", "id", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
