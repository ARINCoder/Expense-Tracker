/*
  Warnings:

  - You are about to drop the column `Amount` on the `expense` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `expense` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expense` DROP COLUMN `Amount`,
    DROP COLUMN `Date`,
    ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
