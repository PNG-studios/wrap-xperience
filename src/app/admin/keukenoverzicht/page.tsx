"use client"; // nodig omdat we useEffect gebruiken

import ApiCard from "@/components/apiCard";
import React, { useEffect, useState } from "react";

type Keuken = {
  Id: number;
  Naam: string;
  Beschrijving: string;
  FotoUrl: string;
  Datum: string;
  Enabled?: number;
  Priority?: number;
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
      <div>
        <h1 className="text-2xl font-bold mb-4">Keuken Overzicht</h1>
        
      </div>
      <div className="flex flex-wrap gap-4 max-w-[1440px] w-screen">
        {keukens
          .filter((k) => k.Enabled == 1)
          .map((keuken) => (
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
