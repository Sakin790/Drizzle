ALTER TABLE `todos` MODIFY COLUMN `author_id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updated_at` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `todos` DROP COLUMN `created_at`;--> statement-breakpoint
ALTER TABLE `todos` DROP COLUMN `updated_at`;