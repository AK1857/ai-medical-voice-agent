import { integer, pgTable, varchar,timestamp,jsonb } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits:integer()
});

export const sessionsChatTable = pgTable("sessions_chat_table", {

  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  sessionId: varchar( { length: 255 }).notNull().unique(),
  createdAt: timestamp( { mode: "string" }).defaultNow().notNull(),
  createdBy: varchar().references(() => usersTable.email).notNull(),
  conversation:jsonb(),
  conversationId: varchar( { length: 255 }).notNull(),
  notes: varchar( { length: 1000 }),
  report: varchar({ length: 500 }),
  selectedDoctor: jsonb(),   
});
