import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

{/* USERS TABLE*/}  
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  displayName: text("display_name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

{/* USERS CREDENTIALS TABLE*/} 
export const userCredentials = pgTable('user_credentials', {
  userId: uuid('user_id')
    .primaryKey()
    .references(() => users.id, {onDelete: 'cascade'}),
  passwordHash: text('password_hash').notNull(),
});
