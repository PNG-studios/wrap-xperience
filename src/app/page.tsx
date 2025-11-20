import translations from "../translations/nl.json";
import Image from "next/image";
import { StarIcon } from "@/components/starIcon/starIcon";
import styles from "./page.module.css";
import ContentCard from "@/components/contentCard/contentCard";
import ImageSlider from "@/components/imageSlider/imageSlider";
import Carousel from "@/components/carousel/carousel";

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
        <ImageSlider
          beforeImageSrc="images/hero.png"
          afterImageSrc="images/hero.png"
          beforeImageAlt="Before Image"
          afterImageAlt="After Image"
        />
        <div className="contentCardItem">
            <h2>{translations.explanation.title}</h2>
            <p>{translations.explanation.description}</p>
            <a href="">{translations.explanation.cta}</a>
        </div>
      </div>
    </section>

    <section className="container">
      <Carousel>  
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 1"
          />
          <Image
            width={2000}
            height={400}
            src="/images/hero.png"
            alt="Kitchen example 2"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 3"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 4"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 5"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 6"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 7"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 8"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 9"
          />
        </Carousel>
    </section>
    </main>
  );
}
