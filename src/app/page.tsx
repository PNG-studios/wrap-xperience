import translations from "../translations/nl.json";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <h1>{translations.heroTitle}</h1>
        <p>{translations.heroSubtitle}</p>
      </header>
    </main>
  );
}
