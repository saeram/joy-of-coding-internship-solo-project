/*
  Warnings:

  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `task` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - The required column `_id` was added to the `Task` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `date` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_authorId_fkey`;

-- AlterTable
ALTER TABLE `task` DROP PRIMARY KEY,
    DROP COLUMN `authorId`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `id`,
    DROP COLUMN `status`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `date` VARCHAR(191) NOT NULL,
    ADD COLUMN `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isImportant` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`_id`);

-- DropTable
DROP TABLE `user`;
