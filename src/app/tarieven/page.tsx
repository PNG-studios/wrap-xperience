import styles from "./page.module.css";
import translations from "@/translations/nl.json";
import Header from "@/components/header/header";
import ContentCard from "@/components/contentCard/contentCard";
import Footer from "@/components/footer/footer";

export default function Tarieven() {
  return (
    <main>
      <Header title="Tarieven" backgroundImageSrc="/images/tarieven_hero.jpg" />

      <ContentCard
        imageSrc="/images/keuken_1_after.webp"
        imageAlt="Hoeveel kost keuken wrappen"
        title={translations.tarieven.title}
        description={translations.tarieven.description}
        buttonText="Maak afspraak"
        buttonHref="/contact"
        position="left"
        backgroundColor=""
      />

      <section className="container">
        <div className={styles.grid}>
          {Object.values(translations.tarieven.tarievenlijst).map(
            (tarievenlijst, index) => (
              <div key={index} className={styles.item}>
                <h2 className={styles.title}>{tarievenlijst.title}</h2>
                <img
                  src={tarievenlijst.imageSrc}
                  alt={tarievenlijst.imageAlt}
                />
                <p>{tarievenlijst.description}</p>
                <p className={styles.price}>{tarievenlijst.price}</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="container">
        <div className="contentCard">
          <img className="contentCardItem" src="images/alupanel-achterwand.webp" alt="Achterwand laten zetten" />
          <div className="contentCardItem">
            <h2>{translations.tarieven.achterwand.title}</h2>
            <p>{translations.tarieven.achterwand.description}</p>
            <div className={styles.achterwandCta}>
              <p className={styles.price}>
                {translations.tarieven.achterwand.price}
              </p>
              <a href="/contact">{translations.tarieven.achterwand.cta}</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
