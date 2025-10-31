import Header from "@/components/header";
import ContentCardSimple from "@/components/contentCardSimple";
import ContentCard from "@/components/contentCard";
import Image from "next/image";
import Footer from "@/components/footer";
import TextAnimation from "@/components/textAnimation";

export default function Portfolio() {
  return (
    <>
      <main>
        <Header backgroundImage1="/images/hero.png" title="INFORMATIE" />

        <section className="flex my-15 justify-center gap-8 p-8">
          <div className="flex flex-row items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto`">
            <div className="relative w-1/2 h-full">
              <img src="/images/hero.png" alt="" />
            </div>
            <div className="w-1/2 space-y-4">
              <p className=" text-gray-600 leading-relaxed">
                Bij wrap-xperience helpen we je graag om van jouw droomkeuken
                realiteit te maken. Geniet van een compleet nieuwe uitstraling,
                zónder de hoge kosten, lange wachttijden of de rommel van een
                volledige renovatie.
              </p>
              <h2 className="text-xl font-bold">Informatie over:</h2>
              <ol className="items-center align-middle">
                <li className="h-12 text-xl text-gray-500 flex items-center border-t border-b border-gray-300 hover:bg-gray-100">
                  Aanrechtbladen
                </li>
                <li className="h-12 text-xl text-gray-500 flex items-center border-t border-b border-gray-300 hover:bg-gray-100">
                  Keukenkastjes
                </li>
                <li className="h-12 text-xl text-gray-500 flex items-center border-t border-b border-gray-300 hover:bg-gray-100">
                  Wat kan wel of niet
                </li>
                <li className="h-12 text-xl text-gray-500 flex items-center border-t border-b border-gray-300 hover:bg-gray-100">
                  Onderhoud
                </li>
                <li className="h-12 text-xl text-gray-500 flex items-center border-t border-b border-gray-300 hover:bg-gray-100">
                  Kleuren en patronen
                </li>
                <li className="h-12 text-xl text-gray-500 flex items-center border-t border-b border-gray-300 hover:bg-gray-100">
                  Afkitten
                </li>
                <li className="h-12 text-xl text-gray-500 flex items-center border-t border-b border-gray-300 hover:bg-gray-100">
                  Extra informatie
                </li>
              </ol>
            </div>
          </div>
        </section>

        <ContentCardSimple
          imageSection={
            <Image
              src="/images/hero.png"
              alt="Kitchen renovation"
              width={500}
              height={400}
              className="rounded-lg"
            />
          }
          title="AANRECHTBLADEN WRAPPEN"
          description="Een aanrechtblad wrappen is een slimme manier om het uiterlijk van je keukenblad te vernieuwen. Hierbij brengen we een dunne laag hoogwaardige folie of vinyl aan over het bestaande blad, zonder dat er iets vervangen hoeft te worden.

Ja, een keukenblad kan zeker geplakt worden! Wij gebruiken speciaal ontwikkeld materiaal dat stootvast, krasbestendig, waterafstotend en hittebestendig is tot wel 110 graden. De randen worden zorgvuldig afgekit, zodat er geen vuil of vocht onder het materiaal kan komen.

Ook je tegelwand kunnen we strak afwerken. Met behulp van 3 mm dun plaatmateriaal verlijmen we een nieuwe, egale ondergrond over de bestaande tegels. Deze werken we af met folie naar keuze en kitten we netjes af voor een strak en naadloos resultaat – zonder dat er gestuct hoeft te worden."
          position="right"
          backgroundColor="#E8EDED"
        />

        <ContentCardSimple
          imageSection={
            <Image
              src="/images/hero.png"
              alt="Kitchen renovation"
              width={500}
              height={400}
              className="rounded-lg"
            />
          }
          title="KEUKENKASTJES WRAPPEN"
          description="Keukenkastjes wrappen is een slimme en betaalbare manier om je keuken een nieuwe uitstraling te geven, zonder de hoge kosten van vervanging. De prijs ligt gemiddeld tussen de €50 en €80 per kastje.

Onze vakmensen zorgen voor een grondige reiniging en voorbereiding van het oppervlak, waarna de interieurfolie strak en netjes wordt aangebracht. Kleine beschadigingen zoals krasjes of vlekjes verdwijnen onder de folie. Zijn er grotere beschadigingen, dan worden deze eerst zorgvuldig geplamuurd en geschuurd voor een strak en duurzaam eindresultaat."
          position="left"
          backgroundColor=""
        />

        <section className="flex my-15 justify-center p-8 py-16 bg-secondary">
          <div className="flex flex-col justify-between gap-[2rem] w-full max-w-[1440px] mx-auto`">
            <h2 className="text-3xl text-primary font-bold text-dark">
              WAT KAN WEL OF NIET
            </h2>
            <p>
              Veel keukens gingen je al voor, maar helaas kunnen we niet elke
              keuken wrappen – dit hangt af van het materiaal en de staat van de
              keuken. Bekijk hieronder wat wél en niet mogelijk is bij
              wrap-xperience:
            </p>
            <div className="flex flex-row items-center justify-between">
              <div className="w-1/2">
                <h2 className="text-xl font-bold">WEL</h2>
                <ol className="list-disc pl-5">
                  <li>Wrappen van keukenkastdeuren</li>
                  <li>Wrappen van lades</li>
                  <li>Keukenapparatuur</li>
                  <li>Achterwand</li>
                  <li>Aanrechtblad</li>
                </ol>
              </div>
              <div className="w-1/2">
                <h2 className="text-xl font-bold">NIET</h2>
                <ol className="list-disc pl-5">
                  <li>Direct over tegels wrappen</li>
                  <li>Houten werkbladen</li>
                  <li>Kranen en gootstenen</li>
                  <li>
                    Gebogen of sterk gewelfde oppervlaktes (deze kunnen we wel
                    spuiten)
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <ContentCardSimple
          imageSection={
            <Image
              src="/images/hero.png"
              alt="Kitchen renovation"
              width={500}
              height={400}
              className="rounded-lg"
            />
          }
          title="ONDERHOUD"
          description="Gewrapt aanrechtblad kan worden gereinigd met milde zeep en water. Vermijd agressieve schoonmaakmiddelen en schuurmiddelen, omdat deze de wrap kunnen beschadigen."
          position="left"
          backgroundColor=""
        />

        <ContentCard
          imageSection={
            <Image
              src="/images/hero.png"
              alt="Kitchen renovation"
              width={500}
              height={400}
              className="rounded-lg"
            />
          }
          title="KLEUREN EN PATRONEN"
          description="Er zijn verschillende soorten wraps beschikbaar, waaronder verschillende kleuren, patronen en texturen. Sommige wraps zijn ook speciaal ontworpen om bestand te zijn tegen warmte en vocht, wat ideaal kan zijn voor keuken omgevingen."
          position="right"
          buttonHref=""
          buttonText="DOWNLOAD"
          backgroundColor="#E8EDED"
        />

        <ContentCardSimple
          imageSection={
            <Image
              src="/images/hero.png"
              alt="Kitchen renovation"
              width={500}
              height={400}
              className="rounded-lg"
            />
          }
          title="AFKITTEN"
          description="Wij kitten indien nodig het gehele keukenblad opnieuw af! Zo is de afwerking perfect en kan er geen water of vuil onderkomen."
          position="left"
          backgroundColor=""
        />

        <ContentCardSimple
          imageSection={
            <Image
              src="/images/hero.png"
              alt="Kitchen renovation"
              width={500}
              height={400}
              className="rounded-lg"
            />
          }
          title="EXTRA INFORMATIE"
          description="Een keukenwrap is een snelle, betaalbare manier om je keuken een volledig nieuwe uitstraling te geven zonder dat je een dure verbouwing hoeft te ondergaan. Met hoogwaardige wrapfolie worden je keukenkastjes, lades, en zelfs werkbladen netjes bekleed in de kleur of het patroon van jouw keuze — denk aan mat zwart, houtlook, marmer of betonstijl. Meer informatie nodig over keuken wrappen? Vraag het ons via de chat op de website of neem contact op."
          position="right"
          backgroundColor="#E8EDED"
        />

        <Footer />

        <TextAnimation />
      </main>
    </>
  );
}
