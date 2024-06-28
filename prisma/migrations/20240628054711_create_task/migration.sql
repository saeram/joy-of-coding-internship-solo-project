/*
  Warnings:

  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `isImportant` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `task` table. All the data in the column will be lost.
  - Added the required column `id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `task` DROP PRIMARY KEY,
    DROP COLUMN `_id`,
    DROP COLUMN `created_at`,
    DROP COLUMN `date`,
    DROP COLUMN `isCompleted`,
    DROP COLUMN `isImportant`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `userId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `description` TEXT NOT NULL,
    ADD PRIMARY KEY (`id`);
