import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const { DATABASE_URL } = process.env;

if (!DATABASE_URL)
  throw new Error("DATABASE_URL is not defined. Please check in env file");

const sql = neon(DATABASE_URL);

export const db = drizzle(sql);
