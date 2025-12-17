import { NextResponse } from "next/server";
import { getPool } from "@/api/DbConnect";

// async function addColumns() {
//   const pool = await getPool();
//   await pool.request().query(`
//     ALTER TABLE Keukens
// ADD FotoUrlBefore NVARCHAR(MAX) DEFAULT '[]',
//     FotoUrlAfter  NVARCHAR(MAX) DEFAULT '[]',
//     FotoAltBefore NVARCHAR(MAX) DEFAULT '[]',
//     FotoAltAfter  NVARCHAR(MAX) DEFAULT '[]';
//   `);
//   console.log("Columns added!");
// }

// GET: alle keukens ophalen
export async function GET() {
  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM Keukens");

    const kitchens = result.recordset.map((kitchen) => ({
      ...kitchen,
      FotoUrlBefore: JSON.parse(kitchen.FotoUrlBefore || "[]"),
      FotoUrlAfter: JSON.parse(kitchen.FotoUrlAfter || "[]"),
      FotoAltBefore: JSON.parse(kitchen.FotoAltBefore || "[]"),
      FotoAltAfter: JSON.parse(kitchen.FotoAltAfter || "[]"),
    }));

    return NextResponse.json(kitchens);
  } catch (error) {
    console.error("Fout bij ophalen keukens:", error);
    return NextResponse.json({ error: "Databasefout" }, { status: 500 });
  }
}

// POST: nieuwe keuken toevoegen
export async function POST(request: Request) {
  try {
    const {
      naam,
      fotoUrlBefore,
      fotoUrlAfter,
      fotoAltBefore,
      fotoAltAfter,
      prioriteit,
      status,
    } = await request.json();

    const pool = await getPool();
    const res = await pool
      .request()
      .query("SELECT MAX(Id) AS MaxId FROM Keukens");
    await pool
      .request()
      .input("naam", naam + " #" + res.recordset[0].MaxId)
      .input("fotoUrlBefore", JSON.stringify(fotoUrlBefore))
      .input("fotoUrlAfter", JSON.stringify(fotoUrlAfter))
      .input("fotoAltBefore", JSON.stringify(fotoAltBefore))
      .input("fotoAltAfter", JSON.stringify(fotoAltAfter))
      .input("prioriteit", prioriteit)
      .input("status", status).query(`
        INSERT INTO Keukens (Naam, FotoUrlBefore, FotoAltBefore, FotoUrlAfter, FotoAltAfter, Prioriteit, Status)
        VALUES (@naam, @fotoUrlBefore, @fotoAltBefore, @fotoUrlAfter, @fotoAltAfter, @prioriteit, @status)
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
    const {
      id,
      naam,
      fotoUrlBefore,
      fotoUrlAfter,
      fotoAltBefore,
      fotoAltAfter,
      prioriteit,
      status,
    } = await request.json();

    const pool = await getPool();
    await pool
      .request()
      .input("id", id)
      .input("naam", naam)
      .input("fotoUrlBefore", JSON.stringify(fotoUrlBefore)) // store array as JSON
      .input("fotoUrlAfter", JSON.stringify(fotoUrlAfter))
      .input("fotoAltBefore", JSON.stringify(fotoAltBefore)) // store array as JSON
      .input("fotoAltAfter", JSON.stringify(fotoAltAfter))
      .input("prioriteit", prioriteit)
      .input("status", status).query(`
        UPDATE Keukens
SET Naam = @naam,
    FotoUrlBefore = @fotoUrlBefore,
    FotoAltBefore = @fotoAltBefore,
    FotoUrlAfter = @fotoUrlAfter,
    FotoAltAfter = @fotoAltAfter,
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
