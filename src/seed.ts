import { eq } from "drizzle-orm";
import { authSeeding } from "./auth";
import { db } from "./db";
import { user } from "./schema";

const userDummy = await db.query.user.findFirst({
  where: eq(user.email, "test@test.com"),
});

if (!userDummy) {
  await authSeeding.api.signUpEmail({
    body: {
      email: "test@test.com",
      password: "password",
      name: "test",
    },
  });
}
