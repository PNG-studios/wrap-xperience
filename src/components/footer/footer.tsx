import styles from "./footer.module.css";
import translations from "@/translations/nl.json";
import { Icons } from "../Icons/icons";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div>
                    <img className="logo" src="images/logo.png" alt="Logo" />
                    <p className="text-light">{translations.footer.description}</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div className={styles.contact__logos}>
                        <a target="_blank" className={styles.logo} href="https://wa.me/31657027311">
                            <Icons name="whatsapp" />
                        </a>
                        <a target="_blank" className={styles.logo} href="mailto:info@wrap-xperience.nl">
                            <Icons name="mail" />
                        </a>
                        <a className={styles.logo} href="">
                            <Icons name="facebook" />
                        </a>
                    </div>
                    <a className={styles.footerCta} href="/contact">Maak afspraak</a>
                </div>
            </div>
        </footer>
    )
}