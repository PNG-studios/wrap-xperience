"use client";
import react, { useRef } from "react";
import Header from "@/components/header";
import emailjs from "emailjs-com";
import Footer from "@/components/footer";

export default function Portfolio() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_z4ls36l", // 👈 Replace
        "template_m8ajdzh", // 👈 Replace
        formRef.current,
        "fVKM2g11LXydVa1ax" // 👈 Replace
      )
      .then(
        () => {
          alert("✅ Email sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("❌ Failed to send email.");
        }
      );
  };
  return (
    <>
      <main>
        <Header backgroundImage1="/images/hero.png" title="CONTACT" />

        <section className="my-15 justify-center gap-8 p-8 my-32">
          <div className="flex flex-row items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto">
            <div className="w-1/2">
              <p className="leading-relaxed">
                Heb je vragen of wil je weten wat we voor jouw keuken kunnen
                betekenen? Neem gerust contact met ons op! We denken graag met
                je mee en geven persoonlijk advies, helemaal afgestemd op jouw
                wensen. Je kunt ons bellen, mailen of een bericht sturen via het
                contactformulier op onze website. We helpen je graag verder!
              </p>
              <ul className="mt-8 text-4xl">
                <li className="flex flex-row gap-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <p>+31 6 57027311</p>
                </li>
                <li className="flex flex-row gap-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <p>info@wrap-xperience.nl</p>
                </li>
                <li className="flex flex-row gap-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p>Veldhoven</p>
                </li>
              </ul>

              <img src="" alt="Logo" />
            </div>

            <form className="w-1/2" ref={formRef} onSubmit={sendEmail}>
              <div className="flex flex-row justify-between gap-4">
                <div className="w-full">
                  <input
                    className="flex flex-row w-full bg-secondary rounded-lg p-4 mb-4 focus:outline-[#747676] focus:outline-[.15rem]"
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Naam *"
                  />
                </div>

                <div className="w-full">
                  <input
                    className="bg-secondary rounded-lg w-full p-4 mb-4 focus:outline-[#747676] focus:outline-[.15rem]"
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Achternaam *"
                  />
                </div>
              </div>

              <div>
                <input
                  className="bg-secondary rounded-lg w-full p-4 mb-4 focus:outline-[#747676] focus:outline-[.15rem]"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="E-mail adres *"
                />
              </div>

              <div>
                <textarea
                  className="bg-secondary rounded-lg w-full h-[25vh] p-4 mb-4 focus:outline-[#747676] focus:outline-[.15rem]"
                  id="message"
                  name="message"
                  required
                  placeholder="Bericht *"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary/80 text-white px-6 py-3 p-5 rounded-xl transition-colors"
              >
                VERZENDEN
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
