/*
  Warnings:

  - You are about to drop the column `timeZone` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "timeZone",
ADD COLUMN     "timezone" TEXT;
