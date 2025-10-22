"use client"; // nodig omdat we useEffect gebruiken

import ApiCard from "@/components/apiCard";
import React, { useEffect, useState } from "react";

type Keuken = {
  Id: number;
  Naam: string;
  Beschrijving: string;
  FotoUrl: string;
  Datum: string;
};

const KeukenOverzicht: React.FC = () => {
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

  if (loading) return <p>Aan het laden...</p>;

  return (
    <div className="p-8 flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Keuken Overzicht</h1>
      <div className="flex flex-wrap gap-4 max-w-[1440px] w-screen">
        {keukens.map((keuken) => (
          // <div
          //   key={keuken.Id}
          //   className="border rounded-lg p-4 w-64 shadow-md"
          // >
          //   {keuken.FotoUrl && (
          //     <img src={keuken.FotoUrl} width={"300"} />
          //   )}
          //   <h2 className="text-xl font-bold mt-2">{keuken.Naam}</h2>
          //   <p className="text-gray-700 mt-1">{keuken.Beschrijving}</p>
          //   <p className="text-sm text-gray-500 mt-2">
          //     Aangemaakt op: {new Date(keuken.Datum).toLocaleDateString()}
          //   </p>
          // </div>
          <ApiCard
            key={keuken.Id}
            title={keuken.Naam}
            imageUrl={keuken.FotoUrl}
            description={keuken.Beschrijving}
            date={new Date(keuken.Datum).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
}

export default KeukenOverzicht;
