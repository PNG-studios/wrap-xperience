import translations from "@/translations/nl.json";
import styles from "./page.module.css";
import { Icons } from "@/components/Icons/icons";
import Header from "@/components/header/header";
import ContentCardSimple from "@/components/contentCardSimple/contentCardSimple";
import Footer from "@/components/footer/footer";

export default function OverOns() {
  return (
      <main>
        <Header title="Over ons" backgroundImageSrc="/images/hero.png" />

        <ContentCardSimple
          imageSrc="/images/hero.png"
          imageAlt="Sample Image"
          title=""
          description={translations.overOns.description}
          backgroundColor=""
          position="left"
        />

        <section className="container">
        <div className={styles.advantage_container}>
          <div>
            <h2>{translations.overOns.kwaliteit.title}</h2>
            <p className={styles.advantageText}>{translations.overOns.kwaliteit.description}</p>
            <div className={styles.advantage_list}>
              {Object.values(translations.overOns.kwaliteiten).map(
                (kwaliteiten, index) => (
                  <div key={index} className={styles.advantage_item}>
                    <Icons name="checkmark" />
                    <p className={styles.advantageText}>
                      {kwaliteiten.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          <img src="/images/hero.png" alt="" />
        </div>
      </section>

      <Footer />
      </main>
  );
}