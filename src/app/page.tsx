import Navbar from "@/components/navbar";
import ContentCard from "@/components/contentCard";
import {  Star } from 'lucide-react';
import StarContent from "@/components/starContent";

export default function Home() {
  return (
    <main>
      <header className="bg-[url(/images/hero.png)] bg-cover h-screen bg-center bg-no-repeat flex flex-col">
        <Navbar />
        <div className="h-full text-white flex flex-col text-center justify-center items-center">
          <h1 className=" text-[6rem] font-bold">WRAP JOUW KEUKEN IN 1 DAG</h1>
          <div className="flex flex-row gap-[1.1rem] justify-center text-[1.5rem]">
            <button className="bg-primary/90 p-5 rounded-xl  ">
              <a href="">MAAK AFSPRAAK</a>
            </button>
            <button className="bg-primary/90 p-5 rounded-xl ">
              <a href="">VOORBEELDEN</a>
            </button>
          </div>
        </div>
      </header>

      <ContentCard
        imageSrc="/images/hero.png"
        imageAlt="Modern kitchen renovation"
        title="GEEF JOUW KEUKEN EEN NIEUWE LOOK"
        description="Wil je jouw keuken een nieuwe look geven zonder dure renovatie? Laat hem wrappen! Met duurzame folie krijgt je keuken in één dag een frisse uitstraling. WRAP-XPERIENCE biedt hoogwaardige kwaliteit en een perfecte afwerking. Kies uit diverse stijlen en geniet van een stijlvolle, betaalbare make-over. Vraag nu een vrijblijvende offerte aan!"
        buttonText="MEER INFO"
        buttonHref="/services"
      />
      
      <section className="bg-black ">
        <div className="flex gap-[7rem] text-white p-10 max-w-[1440px] mx-auto w-screen">
          <StarContent  
          sectionTitle="ADVIES OP MAAT"
          description="Je keuken wrappen is maatwerk, want iedereen heeft een unieke stijl en voorkeur. Weet je nog niet welke kleur het beste bij jouw keuken past? Geen zorgen, we helpen je graag met persoonlijk advies!"
          />
          <StarContent
            sectionTitle="DUURZAAM"
            description="De hoogwaardige folies zijn hitte-, vocht- en krasbestendig, waardoor je keuken er jarenlang als nieuw uitziet."
          />
          <StarContent
            sectionTitle="GEEN GEDOE"
            description="Binnen één dag krijgt jouw keuken een compleet nieuwe uitstraling, zonder ingrijpende verbouwingen, sloopwerk of lange wachttijden. Je kunt direct genieten van een frisse, moderne look zonder gedoe!"
          />
        </div>
      </section>
     
      
    </main>
  );
}
