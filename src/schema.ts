import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text().primaryKey(),
  name: text(),
  email: text(),
  emailVerified: boolean(),
  image: text(),
  createdAt: timestamp(),
  updatedAt: timestamp(),
});

export const session = pgTable("session", {
  id: text().primaryKey(),
  userId: text().notNull(),
  token: text().notNull().unique(),
  expiresAt: timestamp(),
  ipAddress: text(),
  userAgent: text(),
  createdAt: timestamp(),
  updatedAt: timestamp(),
});

export const account = pgTable("account", {
  id: text().primaryKey(),
  userId: text().notNull(),
  accountId: text(),
  providerId: text(),
  accessToken: text(),
  refreshToken: text(),
  accessTokenExpiresAt: timestamp(),
  refreshTokenExpiresAt: timestamp(),
  scope: text(),
  password: text(),
  createdAt: timestamp(),
  updatedAt: timestamp(),
});
