import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/admin/getAdminUser";

export async function GET() {
  const admin = await getAdminUser();

  if (!admin) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: admin.id,
    username: admin.username,
  });
}
