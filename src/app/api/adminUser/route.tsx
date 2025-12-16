import { getPool } from "@/api/DbConnect";

export interface AdminUser {
  id: number;
  username: string;
  passwordHash: string;
  salt: string;
}

export async function getAdminUser(): Promise<AdminUser | null> {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT TOP 1 * FROM AdminUser");

    if (result.recordset.length === 0) {
      return null; // geen admin user gevonden
    }

    const user = result.recordset[0];
    console.log("Fetched admin user from DB:", user);
    return {
      id: user.id,
      username: user.username,
      passwordHash: user.passwordHash,
      salt: user.salt,
    }
  } catch (error) {
    console.error("Fout bij ophalen admin user:", error);
    return null;
  }
}
