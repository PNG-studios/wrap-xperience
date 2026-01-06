import { NextResponse } from "next/server";
import crypto from "crypto";
import { getAdminUser } from "@/lib/admin/getAdminUser";

function hashPassword(password: string, salt: string) {
  return crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("hex");
}

export async function POST(req: Request) {
  const { username, password } = await req.json();
  console.log(`Login attempt for user: ${username}`);
  console.log(`Password provided: ${password}`);

  const user = await getAdminUser();
  console.log("Retrieved admin user:", user);
  console.log(`Comparing with username: ${user?.username}`);
  if (!user || username !== user.username) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const hash = hashPassword(password, user.salt);
  if (hash !== user.passwordHash) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("authToken", "logged-in", { httpOnly: true, path: "/" });
  return response;
}
