"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./page.module.css";
import { Icons } from "@/components/Icons/icons";
import translations from "@/translations/nl.json";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      )
      .then(
        () => {
          alert("Bericht succesvol verzonden!");
          formRef.current?.reset();
        },
        (error: any) => {
          alert("Er is een fout opgetreden. Probeer het later opnieuw.");
          console.error("EmailJS Error:", error);
        }
      );
  };
  return (
    <main>
      <Header title="Contact" backgroundImageSrc="/images/hero.png" />

      <section className="container">
        <div className={styles.grid}>
          <div>
            <p>{translations.contact.description}</p>
            <div className={styles.contact}>
              <Icons name="phone" />
              <p>{translations.contact.number}</p>
            </div>
            <div className={styles.contact}>
              <Icons name="mail" />
              <p>{translations.contact.email}</p>
            </div>
            <div className={styles.contact}>
              <Icons name="pin" />
              <p>{translations.contact.location}</p>
            </div>
            <img src="images/logo.png" alt="Logo" />
          </div>
          <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
            <input
              className={styles.form__item}
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Naam *"
            />
            <input
              className={styles.form__item}
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Achternaam *"
            />
            <input
              className={styles.form__item}
              type="email"
              id="email"
              name="email"
              required
              placeholder="E-mail adres *"
            />
            <textarea
              className={styles.form__item}
              id="message"
              name="message"
              required
              placeholder="Bericht *"
            ></textarea>
            <button className={styles.form__button} type="submit">
              VERZENDEN
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
