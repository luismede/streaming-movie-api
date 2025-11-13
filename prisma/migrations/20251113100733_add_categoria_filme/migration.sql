/*
  Warnings:

  - Added the required column `categoria` to the `filme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "filme" ADD COLUMN     "categoria" TEXT NOT NULL;
