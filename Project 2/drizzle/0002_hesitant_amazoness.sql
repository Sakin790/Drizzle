RENAME TABLE `users` TO `users_table`;--> statement-breakpoint
ALTER TABLE `users_table` DROP INDEX `emailUniqueIndex`;--> statement-breakpoint
ALTER TABLE `users_table` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `users_table` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `users_table` ADD `age` int NOT NULL;--> statement-breakpoint
ALTER TABLE `users_table` ADD CONSTRAINT `id` UNIQUE(`id`);--> statement-breakpoint
ALTER TABLE `users_table` ADD CONSTRAINT `users_table_email_unique` UNIQUE(`email`);