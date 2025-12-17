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
  Beschrijving: string;
  FotoUrl: string;
};

export default function Portfolio() {
  const [keukens, setKeukens] = useState<Kitchen[]>([]);

  useEffect(() => {
    fetch("/api/keukens")
      .then((response) => response.json())
      .then(setKeukens);
  }, []);
  return (
    <main>
      <Header
        title="Portfolio"
        backgroundImageSrc="/images/tarieven_hero.jpg"
      />

      {keukens.map((keuken) => (
        <PortfolioExample
          key={keuken.Id}
          title={keuken.Naam}
          imageBeforeSrc={[
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
          ]}
          imageBeforeAlt={[
            "image 1",
            "image 2",
            "image 3",
            "image 4",
            "image 5",
          ]}
          imageAfterSrc={[
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
            "/images/keuken_1_after.webp",
          ]}
          imageAfterAlt={[
            "image 1",
            "image 2",
            "image 3",
            "image 4",
            "image 5",
          ]}
        />
      ))}

      <Footer />
    </main>
  );
}
