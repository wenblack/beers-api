/*
  Warnings:

  - Added the required column `categorieId` to the `Beer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "IBU" INTEGER NOT NULL,
    "categorieId" TEXT NOT NULL,
    CONSTRAINT "Beer_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Beer" ("IBU", "description", "id", "name", "rating") SELECT "IBU", "description", "id", "name", "rating" FROM "Beer";
DROP TABLE "Beer";
ALTER TABLE "new_Beer" RENAME TO "Beer";
CREATE UNIQUE INDEX "Beer_id_key" ON "Beer"("id");
CREATE UNIQUE INDEX "Beer_name_key" ON "Beer"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
