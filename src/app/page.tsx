import translations from "../translations/nl.json";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>{translations.heroTitle}</h1>
          <p>{translations.heroSubtitle}</p>
          <a href="">{translations.heroCta}</a>
        </div>
      </header>
    </main>
  );
}
