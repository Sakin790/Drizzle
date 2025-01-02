CREATE TABLE `todos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text,
	`author_id` int,
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `todos` ADD CONSTRAINT `todos_author_id_users_id_fk` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;