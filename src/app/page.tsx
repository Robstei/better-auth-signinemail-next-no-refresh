import { auth } from "@/auth";
import { Navbar } from "./navbar";
import { headers } from "next/headers";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <button
        onClick={async () => {
          "use server";
          const headerList = await headers();
          await auth.api.signOut({ headers: headerList });
        }}
      >
        logout
      </button>
      <button
        onClick={async () => {
          "use server";
          await auth.api.signInEmail({
            body: { email: "test@test.com", password: "password" },
          });
        }}
      >
        login
      </button>
    </div>
  );
}
