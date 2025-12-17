"use client";

import { use, useEffect, useState } from "react";
import { gsap } from "gsap";

import translations from "../translations/nl.json";
import Image from "next/image";
import { Icons } from "@/components/Icons/icons";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import ScrollUp from "@/components/scrollUp/scrollUp";
import ContentCard from "@/components/contentCard/contentCard";
import ImageSlider from "@/components/imageSlider/imageSlider";
import Carousel from "@/components/carousel/carousel";
import GoogleReviews from "@/components/googleReviews/googleReviews";
import Footer from "@/components/footer/footer";

const placeId = process.env.PLACE_ID ?? "";

type Kitchen = {
  Id: number;
  Beschrijving: string;
  FotoUrl: string;
};

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      ".whiteText",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 }
    );
  }, []);

  const [keukens, setKeukens] = useState<Kitchen[]>([]);

  useEffect(() => {
    fetch("/api/keukens")
      .then((response) => response.json())
      .then(setKeukens);
  }, []);

  

  return (
    <main>
      <Navbar />

      <header className={styles.header}>
        <div className="container">
          <h1 className="h1">{translations.hero.title}</h1>
          <p className="whiteText">{translations.hero.subtitle}</p>
          <a className="headerButton" href="/contact">
            {translations.hero.cta}
          </a>
        </div>
      </header>
      <ScrollUp />

      <ContentCard
        imageSrc="/images/keuken_1_after.webp"
        imageAlt="Keuken wrappen voorbeeld"
        title={translations.general.title}
        description={translations.general.description}
        buttonText={translations.general.cta}
        buttonHref="/contact"
        position="left"
        backgroundColor="#F9F9F9"
      />

      <section className={`container ${styles.backgroundBlack}`}>
        <div className={styles.qualityContainer}>
          {Object.values(translations.qualities).map((quality, index) => (
            <div key={index} className={styles.qualityItem}>
              <Icons name="star" />
              <h3 className="whiteText">{quality.title}</h3>
              <p className="whiteText">{quality.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="contentCard content-card__left">
          <div className="contentCardItem">
            <h2>{translations.explanation.title}</h2>
            <p>{translations.explanation.description}</p>
            <a href="/portfolio">{translations.explanation.cta}</a>
          </div>
          <ImageSlider
            beforeImageSrc="images/keuken_1_before.webp"
            afterImageSrc="images/keuken_1_after.webp"
            beforeImageAlt="Keuken renoveren"
            afterImageAlt="keuken renovatie eindhoven"
          />
        </div>
      </section>

      <section className="container background-light">
        <h2>{translations.kitchens.title}</h2>
        <Carousel>
          {keukens.map((keuken) => (
            console.log(keuken),
            <img key={keuken.Id} src={keuken.FotoUrl} alt={keuken.Beschrijving} />
          ))}
          <img src="/images/keuken_1_after.webp" alt="Keuken voorbeeld 1" />
          <img src="/images/keuken_2_after.webp" alt="Keuken voorbeeld 2" />
          <img src="/images/keuken_3_after.webp" alt="Keuken voorbeeld 3" />
          <img src="/images/keuken_4_after_3.webp" alt="Keuken voorbeeld 4" />
          <img src="/images/keuken_5_after.webp" alt="Keuken voorbeeld 5" />
          <img src="/images/keuken_6_after.webp" alt="Keuken voorbeeld 6" />
        </Carousel>
      </section>

      <section className="container">
        <div className={styles.advantage_container}>
          <div>
            <h2>{translations.advantageSection.title}</h2>
            <div className={styles.advantage_list}>
              {Object.values(translations.advantageSection.advantages).map(
                (advantage, index) => (
                  <div key={index} className={styles.advantage_item}>
                    <Icons name="checkmark" />
                    <p className={styles.advantageText}>
                      {advantage.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          <img src="/images/keuken_2_after.webp" alt="Voordelen van keuken wrappen" />
        </div>
      </section>

      <section className="container">
        <GoogleReviews className="" maxReviews={3} placeId={placeId} />
      </section>

      <Footer />
    </main>
  );
}
