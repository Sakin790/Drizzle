ALTER TABLE `todos` MODIFY COLUMN `author_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `todos` ADD `created_at` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `todos` ADD `updated_at` timestamp DEFAULT (now()) NOT NULL ON UPDATE CURRENT_TIMESTAMP;