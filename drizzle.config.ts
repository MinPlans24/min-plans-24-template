import { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: "./.env.local",
});

const { DATABASE_URL } = process.env;
if (!DATABASE_URL)
  throw new Error("DATABASE_URL is not defined. Please check in env file");

const drizzleKitConfig = {
  driver: "pg",
  schema: ["./src/shared/services/back-end/db/schemas/note.ts"],
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;

export default drizzleKitConfig;
