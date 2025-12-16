"use client";

import KeukenKaart from "./keukenDataKaart"
import React, { useEffect, useState } from "react";

type Keuken = {
  Id: number;
  Naam: string;
  Beschrijving: string;
  FotoUrl: string;
  Datum: string;
  Status?: number;
  Prioriteit?: number;
};
type Props = {
  filterStatus?: number;
};

export default function KeukenOverzicht({ filterStatus }: Props) {
  const [keukens, setKeukens] = useState<Keuken[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchKeukens() {
      try {
        const res = await fetch("/api/keukens");
        const data = await res.json();
        setKeukens(data);
      } catch (err) {
        console.error("Fout bij ophalen keukens:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchKeukens();
  }, []);

  const PostKeuken = () => async () => {
    const response = await fetch('/api/keukens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        naam: 'Nieuwe Keuken',
        beschrijving: 'Beschrijving van ',
        fotoUrl: 'https://webtalis.nl/wp-content/uploads/2023/04/wat-is-url.jpg',
        prioriteit: 1,
        status: 0,
      }),
      
    });
    if (response.ok) {
        
        console.log('Keuken toegevoegd');
        window.location.reload();
      } else {
        console.error('Fout bij toevoegen keuken');
      }
  };

  return (
    <div className="flex border rounded-xl p-4 flex-col  gap-4 max-w-[1440px] w-screen">
      <div className="flex-row flex justify-between mb-4">
        <h1 className={`text-[1.7rem] font-bold ${filterStatus === 1 ? "text-green-500" : "text-red-500"}`}>{filterStatus === 1 ? "Actief" : "Inactief"}</h1>
        {loading && <h1 className="text-center">Aan het laden...</h1>}
        <div>
          {filterStatus === 0 && !loading && <button className="bg-green-500 text-white px-4 py-2 rounded w-[7rem]" onClick={PostKeuken()}>Voeg toe</button>}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 max-w-[1440px] w-100%">
        {keukens.length > 0 ? (
          keukens
          .filter((k) => k.Status == filterStatus)
          .map((keuken) => (
            <KeukenKaart
              id={keuken.Id}
              key={keuken.Id}
              title={keuken.Naam}
              imageUrl={keuken.FotoUrl}
              description={keuken.Beschrijving}
              date={new Date(keuken.Datum).toLocaleDateString()}
              priority={keuken.Prioriteit}
              enabled={keuken.Status}
            />
          ))
        ) : (
          !loading && <h1 className="text-center w-full">Geen keukens gevonden.</h1>
        )}
      </div>
    </div>
  )

}