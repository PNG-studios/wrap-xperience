import sql from "mssql";;

const config: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// // Gebruik één gedeelde pool (belangrijk voor Next.js hot reload)
// let pool: sql.ConnectionPool | null = null;

// export async function getPool(): Promise<sql.ConnectionPool> {
//   if (pool) return pool;
//   try {
//     pool = await sql.connect(config);
//     console.log("✅ Verbonden met SQL Server");
//     return pool;
//   } catch (err) {
//     console.error("❌ Database connectie mislukt:", err);
//     throw err;
//   }
// }

let pool: sql.ConnectionPool | null = null;

export async function getPool(): Promise<sql.ConnectionPool> {
  try {
    if (pool) return pool; // hergebruik bestaande pool
    pool = await sql.connect(config);
    console.log("✅ Verbonden met SQL Server");
    return pool;
  } catch (err) {
    console.error("❌ Database connectie mislukt:", err);
    throw err;
  }
}