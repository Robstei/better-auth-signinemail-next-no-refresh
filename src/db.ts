import * as schema from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle("postgres://postgres:password@postgres", {
  schema: schema,
});
