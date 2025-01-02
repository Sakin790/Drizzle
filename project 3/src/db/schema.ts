import {
  mysqlTable,
  serial,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});


export const todos = mysqlTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  content: text("content"),
  authorId: serial("author_id")
    .references(() => users.id)
    .notNull(),
});

