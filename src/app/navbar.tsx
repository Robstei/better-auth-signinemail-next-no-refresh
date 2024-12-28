import { auth } from "@/auth";
import { cookies, headers } from "next/headers";
import Link from "next/link";

export const Navbar = async () => {
  const headerList = await headers();
  console.log(
    "rendering navbar with following cookie header: ",
    JSON.stringify(headerList.get("cookie"))
  );
  const cookieList = await cookies();
  console.log(
    "rendering navbar with following cookie value for better-auth.session_token ",
    cookieList.get("better-auth.session_token")
  );
  const session = await auth.api.getSession({ headers: headerList });

  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
      </div>
      {session && (
        <div>
          <Link href="/secret">SecretMenuItem</Link>
        </div>
      )}
    </nav>
  );
};
