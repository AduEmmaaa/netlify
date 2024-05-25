-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `userProfile` VARCHAR(191) NULL,
    `posttime` DATETIME(3) NOT NULL,
    `desc` VARCHAR(191) NULL,
    `postimg` VARCHAR(191) NULL,
    `like` INTEGER NOT NULL,
    `comment` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
