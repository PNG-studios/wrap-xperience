"use client"
import styles from "./scrollUp.module.css";
import { Icons } from "../Icons/icons";

export default function ScrollUp() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <button className={styles.scrollUp} onClick={scrollToTop} aria-label="Scroll to top">
            <Icons name="arrowUp" />
        </button>
    )
}