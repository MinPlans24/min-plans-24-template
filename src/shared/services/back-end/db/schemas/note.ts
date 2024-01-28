import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const NoteSchema = pgTable("note", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  imageUrl: text("imageUrl"),
  userId: text("userId").notNull(),
  editorState: text("editorState"),
});

export type Note = typeof NoteSchema.$inferInsert;
