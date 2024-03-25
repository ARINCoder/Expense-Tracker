/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `expense` DROP FOREIGN KEY `Expense_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `income` DROP FOREIGN KEY `Income_categoryId_fkey`;

-- AlterTable
ALTER TABLE `budget` MODIFY `remaining` DOUBLE NULL;

-- AlterTable
ALTER TABLE `expense` ADD COLUMN `category` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `income` ADD COLUMN `category` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `category`;
