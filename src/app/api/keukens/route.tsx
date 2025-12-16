import { NextResponse } from "next/server";
import { getPool } from "@/api/DbConnect";

// GET: alle keukens ophalen
export async function GET() {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM Keukens");
    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error("Fout bij ophalen keukens:", error);
    return NextResponse.json({ error: "Databasefout" }, { status: 500 });
  }
}

// POST: nieuwe keuken toevoegen
export async function POST(request: Request) {
  try {
    const { naam, beschrijving, fotoUrl, prioriteit, status } = await request.json();

    const pool = await getPool();
    const res = await pool.request().query("SELECT MAX(Id) AS MaxId FROM Keukens");
    await pool
      .request()
      .input("naam", naam + " #" + res.recordset[0].MaxId)
      .input("beschrijving", beschrijving)
      .input("fotoUrl", fotoUrl)
      .input("prioriteit", prioriteit)
      .input("status", status)
      .query(`
        INSERT INTO Keukens (Naam, Beschrijving, FotoUrl, Prioriteit, Status)
        VALUES (@naam, @beschrijving + @naam, @fotoUrl, @prioriteit, @status)
      `);

    return NextResponse.json({ message: "Keuken toegevoegd!" });
  } catch (error) {
    console.error("Fout bij toevoegen keuken:", error);
    return NextResponse.json({ error: "Databasefout" }, { status: 500 });
  }
}

// PUT: bestaande keuken updaten
export async function PUT(request: Request) {
  try {
    const { id, naam, beschrijving, fotoUrl, prioriteit, status } = await request.json();

    const pool = await getPool();
    await pool
      .request()
      .input("id", id)
      .input("naam", naam)
      .input("beschrijving", beschrijving)
      .input("fotoUrl", fotoUrl)
      .input("prioriteit", prioriteit)
      .input("status", status)
      .query(`
        UPDATE Keukens
        SET Naam = @naam,
            Beschrijving = @beschrijving,
            FotoUrl = @fotoUrl,
            Prioriteit = @prioriteit,
            Status = @status
        WHERE Id = @id
      `);

    return NextResponse.json({ message: "Keuken geüpdatet!" });
  } catch (error) {
    console.error("Fout bij updaten keuken:", error);
    return NextResponse.json({ error: "Databasefout" }, { status: 500 });
  }
}

// DELETE: keuken verwijderen
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    const pool = await getPool();
    await pool
      .request()
      .input("id", id)
      .query("DELETE FROM Keukens WHERE Id = @id");

    return NextResponse.json({ message: "Keuken verwijderd!" });
  } catch (error) {
    console.error("Fout bij verwijderen keuken:", error);
    return NextResponse.json({ error: "Databasefout" }, { status: 500 });
  }
}
