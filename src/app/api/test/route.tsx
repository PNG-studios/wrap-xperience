import { NextResponse } from "next/server";
import { getPool } from "@/api/DbConnect";

export async function GET() {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT @@VERSION AS version");
    return NextResponse.json({
      success: true,
      version: result.recordset[0].version,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
