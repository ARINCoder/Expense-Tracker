/*
  Warnings:

  - You are about to drop the column `Amount` on the `income` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `income` table. All the data in the column will be lost.
  - You are about to drop the column `Income` on the `income` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `income` DROP COLUMN `Amount`,
    DROP COLUMN `Date`,
    DROP COLUMN `Income`,
    ADD COLUMN `amount` DOUBLE NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `source` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_name_key` ON `Category`(`name`);
