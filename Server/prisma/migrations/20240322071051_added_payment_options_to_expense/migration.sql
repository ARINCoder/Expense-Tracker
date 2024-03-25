/*
  Warnings:

  - Added the required column `paymentOption` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expense` ADD COLUMN `paymentOption` INTEGER NOT NULL;
