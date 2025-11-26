import styles from "./footer.module.css";
import translations from "@/translations/nl.json";
import { Icons } from "../Icons/icons";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div>
                    <img src="images/logo.png" alt="Logo" />
                    <p className="text-light">{translations.footer.description}</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div className={styles.contact__logos}>
                        <Icons name="whatsapp" />
                        <Icons name="mail" />
                        <Icons name="facebook" />
                    </div>
                    <a href="">Maak afspraak</a>
                </div>
            </div>
        </footer>
    )
}