/*
  Warnings:

  - You are about to drop the column `categoryId` on the `expense` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `income` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Expense_categoryId_fkey` ON `expense`;

-- DropIndex
DROP INDEX `Income_categoryId_fkey` ON `income`;

-- AlterTable
ALTER TABLE `expense` DROP COLUMN `categoryId`;

-- AlterTable
ALTER TABLE `income` DROP COLUMN `categoryId`;
