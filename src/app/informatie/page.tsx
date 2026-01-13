import translations from "@/translations/nl.json";
import styles from "./page.module.css";
import ScrollUp from "@/components/scrollUp/scrollUp";
import Header from "@/components/header/header";
import ContentCard from "@/components/contentCard/contentCard";
import ContentCardSimple from "@/components/contentCardSimple/contentCardSimple";
import Footer from "@/components/footer/footer";

export default function Informatie() {
  return (
    <>
      <main>
        <ScrollUp />
        <Header title="Informatie" backgroundImageSrc="/images/footer_kitchen.jpg" />

        <section className="container">
          <div className="contentCard">
            <img src="images/keuken_4_after_3.webp" alt="Alles over keuken wrappen" className="contentCardItem" />
            <div className="contentCardItem">
              <p>{translations.informatie.description}</p>
              <p>Informatie over:</p>
              <ul className={styles.navigation}>
                <li>
                  <a href="#aanrechtbladen">Aanrechtbladen</a>
                </li>
                <li>
                  <a href="#keukenkastjes">Keukenkastjes</a>
                </li>
                <li>
                  <a href="#mogelijkheden">Wat wel of niet kan</a>
                </li>
                <li>
                  <a href="#onderhoud">Onderhoud</a>
                </li>
                <li>
                  <a href="#kleuren">Kleuren en patronen</a>
                </li>
                <li>
                  <a href="#afkitten">Afkitten</a>
                </li>
                <li>
                  <a href="#meer-wrappen">Anders wrappen zoals een Auto</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <ContentCardSimple
          id="aanrechtbladen"
          imageSrc="/images/keuken_6_after.webp"
          imageAlt="Aanrechtblad wrappen"
          title={translations.informatie.aanrechtbladen.title}
          description={translations.informatie.aanrechtbladen.description}
          backgroundColor="var(--light)"
          position="right"
        />

        <ContentCardSimple
          id="keukenkastjes"
          imageSrc="/images/keuken_5_after.webp"
          imageAlt="Keukenkastjes wrappen"
          title={translations.informatie.keukenkastjes.title}
          description={translations.informatie.keukenkastjes.description}
          backgroundColor=""
          position="left"
        />

        <section id="mogelijkheden" className={`container ${styles.grayBackground}`}>
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
            id="onderhoud"
            imageSrc="/images/keuken_2_after.webp"
            imageAlt="Onderhoud van keuken wrappen"
            title={translations.informatie.onderhoud.title}
            description={translations.informatie.onderhoud.description}
            backgroundColor=""
            position="right"
        />

        <ContentCardSimple
            id="kleuren"
            imageSrc="/images/keuken-klein-1.webp"
            imageAlt="Kleuren en patronen voor keuken wrappen"
            title={translations.informatie.kleuren.title}
            description={translations.informatie.kleuren.description}
            backgroundColor="var(--light)"
            position="left"
        />

        <ContentCardSimple
            id="afkitten"
            imageSrc="/images/keuken_3_after.webp"
            imageAlt="Keuken afwerken"
            title={translations.informatie.afkitten.title}
            description={translations.informatie.afkitten.description}
            backgroundColor=""
            position="right"
        />

        <ContentCardSimple
            id="meer-wrappen"
            imageSrc="/images/voertuig_1_after.webp"
            imageAlt="Auto wrappen"
            title={translations.informatie.meerWrappen.title}
            description={translations.informatie.meerWrappen.description}
            backgroundColor="var(--light)"
            position="left"
        />

        <Footer />
      </main>
    </>
  );
}
