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
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    buttonRef.current!.innerHTML = "VERZENDEN...";
    buttonRef.current!.classList.add(styles.form__button_sending);

    const p = document.createElement("p");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      )
      .then(
        () => {
          if (buttonRef.current) {
            buttonRef.current.classList.remove(styles.form__button_sending);
            buttonRef.current.innerHTML = "VERZONDEN";
            buttonRef.current.classList.remove(styles.form__button_error);
            buttonRef.current.classList.add(styles.form__button_sent);
          }
          formRef.current?.reset();
        },
        (error: any) => {
          if (buttonRef.current) {
            buttonRef.current.classList.remove(styles.form__button_sending);
            buttonRef.current.innerHTML =
              "Er is een fout opgetreden, probeer het later opnieuw";
            buttonRef.current.classList.remove(styles.form__button_sent);
            buttonRef.current.classList.add(styles.form__button_error);
          }
          if (!document.getElementById("form-error-message")) {
            const p = document.createElement("p");
            p.id = "form-error-message";
            p.innerText =
              "Of stuur direct een mail naar: " + translations.contact.email;
            formRef.current?.appendChild(p);
          }
        }
      );
  };
  return (
    <main>
      <Header title="Contact" backgroundImageSrc="/images/hero_kitchen.jpg" />

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
            <img className="logo" src="images/logo-Wrap-Xperience-Black.jpg" alt="Logo" />
          </div>
          <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
            <div className={styles.form__field}>
              <input
              className={styles.form__item}
              type="text"
              id="firstName"
              name="firstName"
              required
              />
              <label className={styles.form__label}>Naam *</label>
            </div>
            <div className={styles.form__field}>
              <input
              className={styles.form__item}
              type="text"
              id="lastName"
              name="lastName"
              required
            />
            <label className={styles.form__label}>Achternaam *</label>
            </div>
            <div className={styles.form__field}>
              <input
              className={styles.form__item}
              type="email"
              id="email"
              name="email"
              required
            />
            <label className={styles.form__label}>E-mail *</label>
            </div>
            <textarea
              className={styles.form__item}
              id="message"
              name="message"
              required
              placeholder="Bericht *"
            ></textarea>
            <button
              ref={buttonRef}
              className={styles.form__button}
              type="submit"
            >
              VERZENDEN
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
