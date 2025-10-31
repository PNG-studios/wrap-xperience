import Header from "@/components/header";
import ContentCard from "@/components/contentCard";

import Image from "next/image";
import Footer from "@/components/footer";

import TextAnimation from "@/components/textAnimation";

export default function Tarieven() {
  return (
    <main>
      <Header backgroundImage1="/images/hero.png" title="TARIEVEN" />

      <ContentCard
        imageSection={
          <Image
            src="/images/hero.png"
            alt="Kitchen renovation"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        }
        title="DE KOSTEN VAN HET KEUKEN WRAPPEN"
        description="De kosten voor het wrappen van een keuken kunnen flink variëren en zijn afhankelijk van verschillende factoren, zoals de grootte van de keuken, het gekozen type wrapmateriaal en de complexiteit van het ontwerp. In de meeste gevallen liggen de kosten tussen enkele honderden en een paar duizend euro.
Kies je voor hoogwaardige vinylfolie en professionele installatie, dan kan dit de prijs iets verhogen, maar het verlengt ook de levensduur van je wrap. Voor een standaard keuken met gemiddelde afmetingen en een eenvoudig ontwerp blijven de kosten doorgaans aan de lagere kant. Grotere keukens, complexe ontwerpen of benodigde reparaties vooraf zorgen uiteraard voor een hogere prijs."
        buttonText="MAAK AFSPRAAK"
        buttonHref="/contact"
        position="left"
        backgroundColor=""
      />

      <section className="flex my-15 justify-center p-8 py-16">
        <div className="flex flex-row flex-wrap justify-between gap-[2rem] w-full max-w-[1440px] mx-auto`">
          <div className="w-[30%] mb-8">
            <h2 className="text-3xl">Kleine keuken</h2>
            <img src="/images/hero.png" alt="" />
            <p className=" text-gray-600 leading-relaxed">
              tot en met 9 fronten en/of lades
            </p>
            <h2 className="text-primary text-4xl font-bold">Vanaf € 699,-</h2>
          </div>
          <div className="w-[30%] mb-8">
            <h2 className="text-3xl">Middelgrote keuken</h2>
            <img src="/images/hero.png" alt="" />
            <p className=" text-gray-600 leading-relaxed">
              Vanaf 10 fronten en/of lades
            </p>
            <h2 className="text-primary text-4xl font-bold">Vanaf € 999,-</h2>
          </div>
          <div className="w-[30%] mb-8">
            <h2 className="text-3xl">Grote keuken</h2>
            <img src="/images/hero.png" alt="" />
            <p className=" text-gray-600 leading-relaxed">
              Vanaf 20 fronten en/of lades
            </p>
            <h2 className="text-primary text-4xl font-bold">Vanaf € 1599,-</h2>
          </div>
          <div className="w-[30%] mb-8">
            <h2 className="text-3xl">Custom made</h2>
            <img src="/images/hero.png" alt="" />
            <p className=" text-gray-600 leading-relaxed">
              Een eigen ontwerp met extra’s op basis van een bestaande keuken
            </p>
            <h2 className="text-primary text-4xl font-bold">Vanaf € 1599,-</h2>
          </div>
          <div className="w-[30%] mb-8">
            <h2 className="text-3xl">Keukenblad</h2>
            <img src="/images/hero.png" alt="" />
            <p className=" text-gray-600 leading-relaxed">
              Keukenblad inclusief nieuwe kitranden, keuze uit dikkere folie met
              hogere krasbestendigheid.
            </p>
            <h2 className="text-primary text-4xl font-bold">Vanaf € 325,-</h2>
          </div>
          <div className="w-[30%] mb-8">
            <h2 className="text-3xl">Keuken met veel profiel</h2>
            <img src="/images/hero.png" alt="" />
            <p className=" text-gray-600 leading-relaxed">
              Deze keuken wordt gecoat in plaats van gewrapt omdat deurtjes te
              veel profiel hebben
            </p>
            <h2 className="text-primary text-4xl font-bold">Vanaf € 1749,-</h2>
          </div>
        </div>
      </section>

      <section className="my-15 justify-center gap-8 p-8 py-16">
        <div className="flex flex-row items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto">
          <div className="relative w-1/2 h-full">
            <img src="/images/hero.png" alt="" />
          </div>
          <div className="w-1/2 space-y-4">
            <h2 className="text-3xl text-primary font-bold text-dark">
              ACHTERWAND
            </h2>
            <p className=" text-gray-600 leading-relaxed">
              Een spatscherm van 3 mm dik aluminium en kunststof is de ideale
              oplossing voor de achterwand van je keuken. Het materiaal is
              licht, sterk en roestvrij, en bovendien hittebestendig bij normaal
              gebruik. Dankzij het gladde oppervlak veeg je vetspetters, vocht
              en vuil eenvoudig schoon, waardoor je keuken altijd netjes en fris
              blijft. Daarnaast zorgt aluminium voor een strakke, moderne
              uitstraling die perfect past bij vrijwel elke keukenstijl.   Let
              wel op het juiste gebruik van deze achterwand: •Bij keramische
              kookplaten moet je minimaal 10 cm afstand houden tussen de
              kookplaat en het spatscherm om vervorming of verkleuring te
              voorkomen. •Bij inductiekookplaten vormt dit geen probleem, omdat
              daar minder directe warmte vrijkomt. •Bij gasfornuizen mag deze
              achterwand niet worden geplaatst, omdat de hitte van open vuur te
              hoog is voor dit materiaal. •De aluminium plaat heeft een kern van
              kunststof; dit betekent dat direct contact met stoom of hitte,
              bijvoorbeeld van een waterkoker, pan of kookplaat, schade kan
              veroorzaken.   Deze tips zorgen ervoor dat je aluminium achterwand
              mooi blijft en langer meegaat. Volg deze adviezen op om
              beschadiging te voorkomen en jarenlang van je stijlvolle keuken te
              genieten
            </p>
            <h2 className="text-primary text-4xl font-bold mb-8">Vanaf € 1749,-</h2>
            <a
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 p-5 rounded-xl transition-colors"
              href=""
            >
              Maak afspraak
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <TextAnimation />
    </main>
  );
}
