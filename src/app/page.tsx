import translations from "../translations/nl.json";
import Image from "next/image";
import { StarIcon } from "@/components/starIcon";
import styles from "./page.module.css";
import ContentCard from "@/components/contentCard";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className="container">
          <h1>{translations.hero.title}</h1>
          <p className="whiteText">{translations.hero.subtitle}</p>
          <a href="">{translations.hero.cta}</a>
        </div>
      </header>

      <ContentCard
        imageSrc="/images/hero.png"
        imageAlt="Sample Image"
        title={translations.general.title}
        description={translations.general.description}
        buttonText={translations.general.cta}
        buttonHref="#"
        position="left"
        backgroundColor="#F9F9F9"
      />

      <section className={`container ${styles.backgroundBlack}`}>
        <div className={styles.qualityContainer}>
          {Object.values(translations.qualities).map((quality, index) => (
            <div key={index} className={styles.qualityItem}>
              <StarIcon />
              <h3 className="whiteText">{quality.title}</h3>
              <p className="whiteText">{quality.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
      <div className="contentCard content-card__left">
        <img src="images/hero.png" alt="" className="contentCardItem" />
        <div className="contentCardItem">
            <h2>{translations.explanation.title}</h2>
            <p>{translations.explanation.description}</p>
            <a href="">{translations.explanation.cta}</a>
        </div>
      </div>
    </section>
    </main>
  );
}
