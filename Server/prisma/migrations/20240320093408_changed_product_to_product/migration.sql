/*
  Warnings:

  - You are about to drop the column `Product` on the `expense` table. All the data in the column will be lost.
  - Added the required column `product` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expense` DROP COLUMN `Product`,
    ADD COLUMN `product` VARCHAR(191) NOT NULL;
