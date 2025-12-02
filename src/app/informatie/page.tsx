import translations from "@/translations/nl.json";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import ContentCard from "@/components/contentCard/contentCard";

export default function Informatie() {
  return (
    <>
      <main>
        <Header title="Test" backgroundImageSrc="/images/hero.png" />

        <section className="container">
      <div className="contentCard">
        <img src="images/hero.png" alt="" className="contentCardItem" />
        <div className="contentCardItem">
            <p>{translations.informatie.description}</p>
            <p>Informatie over:</p>
            <ul className={styles.navigation}>
                <li><a href="">Aanrechtbladen</a></li>
                <li><a href="">Keukenkastjes</a></li>
                <li><a href="">Wat wel of niet kan</a></li>
                <li><a href="">Onderhoud</a></li>
                <li><a href="">Kleuren en patronen</a></li>
                <li><a href="">Afkitten</a></li>
                <li><a href="">Extra informatie</a></li>
            </ul>
        </div>
      </div>
    </section>
      </main>
    </>
  );
}
