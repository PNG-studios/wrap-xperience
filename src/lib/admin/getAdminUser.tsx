import "server-only";
import { getPool } from "@/api/DbConnect";

export interface AdminUser {
  id: number;
  username: string;
  passwordHash: string;
  salt: string;
}

export async function getAdminUser(): Promise<AdminUser | null> {
  const pool = await getPool();
  const result = await pool.request().query(
    "SELECT TOP 1 * FROM AdminUser ORDER BY Id ASC"
  );
  // console.log("Admin user query result:", result);

  if (result.recordset.length === 0) return null;

  const user = result.recordset[0];

  return user;
}
