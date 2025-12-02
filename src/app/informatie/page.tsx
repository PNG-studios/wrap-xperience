import translations from "@/translations/nl.json";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import ContentCard from "@/components/contentCard/contentCard";
import ContentCardSimple from "@/components/contentCardSimple/contentCardSimple";
import Footer from "@/components/footer/footer";

export default function Informatie() {
  return (
    <>
      <main>
        <Header title="Informatie   " backgroundImageSrc="/images/hero.png" />

        <section className="container">
          <div className="contentCard">
            <img src="images/hero.png" alt="" className="contentCardItem" />
            <div className="contentCardItem">
              <p>{translations.informatie.description}</p>
              <p>Informatie over:</p>
              <ul className={styles.navigation}>
                <li>
                  <a href="">Aanrechtbladen</a>
                </li>
                <li>
                  <a href="">Keukenkastjes</a>
                </li>
                <li>
                  <a href="">Wat wel of niet kan</a>
                </li>
                <li>
                  <a href="">Onderhoud</a>
                </li>
                <li>
                  <a href="">Kleuren en patronen</a>
                </li>
                <li>
                  <a href="">Afkitten</a>
                </li>
                <li>
                  <a href="">Extra informatie</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <ContentCardSimple
          imageSrc="/images/hero.png"
          imageAlt="Sample Image"
          title={translations.informatie.aanrechtbladen.title}
          description={translations.informatie.aanrechtbladen.description}
          backgroundColor="var(--light)"
          position="right"
        />

        <ContentCardSimple
          imageSrc="/images/hero.png"
          imageAlt="Sample Image"
          title={translations.informatie.keukenkastjes.title}
          description={translations.informatie.keukenkastjes.description}
          backgroundColor=""
          position="left"
        />

        <section className={`container ${styles.grayBackground}`}>
          <div className="contentCardItem">
            <h2>Wat kan wel of niet</h2>
            <p>
              Veel keukens gingen je al voor, maar helaas kunnen we niet elke
              keuken wrappen – dit hangt af van het materiaal en de staat van de
              keuken. Bekijk hieronder wat wél en niet mogelijk is bij
              wrap-xperience:
            </p>
            <div className={styles.mogelijkheden__container}>
                <ul className={styles.mogelijkheden__items}>
                    Wel
                    <li>Wrappen van keukenkastdeuren</li>
                    <li>Wrappen van lades</li>
                    <li>Keukenapparatuur</li>
                    <li>Achterwand</li>
                    <li>Aanrechtblad</li>
                </ul>
                <ul className={styles.mogelijkheden__items}>
                    Niet
                    <li>Direct over tegels wrappen</li>
                    <li>Houten werkbladen</li>
                    <li>Kranen en gootstenen</li>
                    <li>Gebogen of sterk gewelfde oppervlaktes ( deze kunnen we wel spuiten )</li>
                </ul>
            </div>
          </div>
        </section>

        <ContentCardSimple
            imageSrc="/images/hero.png"
            imageAlt="Sample Image"
            title={translations.informatie.onderhoud.title}
            description={translations.informatie.onderhoud.description}
            backgroundColor=""
            position="right"
        />

        <ContentCard
            imageSrc="/images/hero.png"
            imageAlt="Sample Image"
            title={translations.informatie.kleuren.title}
            description={translations.informatie.kleuren.description}
            buttonText={translations.informatie.kleuren.cta}
            buttonHref="#"
            position="left"
            backgroundColor="var(--light)"
        />

        <ContentCardSimple
            imageSrc="/images/hero.png"
            imageAlt="Sample Image"
            title={translations.informatie.afkitten.title}
            description={translations.informatie.afkitten.description}
            backgroundColor=""
            position="right"
        />

        <Footer />
      </main>
    </>
  );
}
