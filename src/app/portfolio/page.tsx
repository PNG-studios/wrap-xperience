"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ImageSlider from "@/components/imageSlider/imageSlider";
import PortfolioExample from "@/components/portfolioExample/portfolioExample";

type Kitchen = {
  Id: number;
  Naam: string;
  FotoUrlBefore: string[];
  FotoUrlAfter: string[];
  FotoAltBefore: string[];
  FotoAltAfter: string[];
  Datum: string;
};

export default function Portfolio() {
  const [keukens, setKeukens] = useState<Kitchen[]>([]);

  useEffect(() => {
    async function fetchKeukens() {
      try {
        const res = await fetch("/api/keukens");
        if (!res.ok) throw new Error("Failed to fetch kitchens");
        const data: Kitchen[] = await res.json();
        setKeukens(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchKeukens();
  }, []);

  return (
    <main>
      <Header
        title="Portfolio"
        backgroundImageSrc="/images/tarieven_hero.jpg"
      />

      {keukens.map((kitchen) => (
        <PortfolioExample
          key={kitchen.Id}
          title={kitchen.Naam}
          imageBeforeSrc={kitchen.FotoUrlBefore}
          imageBeforeAlt={kitchen.FotoAltBefore}
          imageAfterSrc={kitchen.FotoUrlAfter}
          imageAfterAlt={kitchen.FotoAltAfter}
        />
      ))}

      <Footer />
    </main>
  );
}
