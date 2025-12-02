import translations from "../translations/nl.json";
import Image from "next/image";
import { Icons } from "@/components/Icons/icons";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import ContentCard from "@/components/contentCard/contentCard";
import ImageSlider from "@/components/imageSlider/imageSlider";
import Carousel from "@/components/carousel/carousel";
import GoogleReviews from "@/components/googleReviews/googleReviews";
import Footer from "@/components/footer/footer";

const placeId = process.env.PLACE_ID ?? "";

export default function Home() {
  return (
    <main>
      <Navbar />

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
            <a href="">{translations.explanation.cta}</a>
          </div>
          <ImageSlider
            beforeImageSrc="images/hero.png"
            afterImageSrc="images/hero.png"
            beforeImageAlt="Before Image"
            afterImageAlt="After Image"
          />
        </div>
      </section>

      <section className="container background-light">
        <h2>{translations.kitchens.title}</h2>
        <Carousel>
          <img src="/images/hero.png" alt="Kitchen example 1" />
          <img src="/images/hero.png" alt="Kitchen example 2" />
          <img src="/images/hero.png" alt="Kitchen example 3" />
          <img src="/images/hero.png" alt="Kitchen example 4" />
          <img src="/images/hero.png" alt="Kitchen example 5" />
          <img src="/images/hero.png" alt="Kitchen example 6" />
          <img src="/images/hero.png" alt="Kitchen example 7" />
          <img src="/images/hero.png" alt="Kitchen example 8" />
          <img src="/images/hero.png" alt="Kitchen example 9" />
          <img src="/images/hero.png" alt="Kitchen example 10" />
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
          <img src="/images/hero.png" alt="" />
        </div>
      </section>

      <section className="container">
        <GoogleReviews className="" maxReviews={3} placeId={placeId} />
      </section>

      <Footer />
    </main>
  );
}
