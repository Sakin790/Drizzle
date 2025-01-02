ALTER TABLE `todos` MODIFY COLUMN `id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `todos` MODIFY COLUMN `title` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `name` varchar(256);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `email` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updated_at` timestamp NOT NULL;