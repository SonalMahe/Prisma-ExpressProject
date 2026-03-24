/*
  Warnings:

  - Added the required column `sports` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sports" TEXT NOT NULL;
