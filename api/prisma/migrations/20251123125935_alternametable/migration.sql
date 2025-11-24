/*
  Warnings:

  - Made the column `isDone` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tasks` MODIFY `isDone` BOOLEAN NOT NULL DEFAULT false;
