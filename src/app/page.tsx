import Navbar from "@/components/navbar";
import ContentCard from "@/components/contentCard";
import StarContent from "@/components/starContent";
import Image from "next/image";
import GoogleReviews from "@/components/googleReviews";
import Carousel from "@/components/carousel";
import CheckmarkSvg from "@/components/checkmarkSvg";
import Footer from "@/components/footer";

const placeId = process.env.PLACE_ID ?? "";

export default function Home() {
  return (
    <main>
      <header className="bg-[url(/images/hero.png)] bg-cover h-screen bg-center bg-no-repeat flex flex-col mb-32">
        <Navbar />
        <div className="h-full text-white flex flex-col text-center justify-center items-center">
          <h1 className=" text-[6rem] font-bold">WRAP JOUW KEUKEN IN 1 DAG</h1>
          <div className="flex flex-row gap-[1.1rem] justify-center text-[1.5rem]">
            <a className="bg-primary hover:bg-primary/80 text-white px-6 py-3 p-5 rounded-xl transition-colors" href="">MAAK AFSPRAAK</a>
            <a className="bg-primary hover:bg-primary/80 text-white px-6 py-3 p-5 rounded-xl transition-colors" href="">VOORBEELDEN</a>
          </div>
        </div>
      </header>

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
        title="GEEF JOUW KEUKEN EEN NIEUWE LOOK"
        description="Your description here..."
        buttonText="MEER INFO"
        buttonHref="/services"
        position="left"
        backgroundColor=""
      />

      <section className="bg-black mb-32">
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

      <ContentCard
        imageSection={
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">VOOR</h3>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/hero.png"
                  alt="Kitchen before 1"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg object-cover"
                />
                <Image
                  src="/images/hero.png"
                  alt="Kitchen before 2"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">NA</h3>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/hero.png"
                  alt="Kitchen after 1"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg object-cover"
                />
                <Image
                  src="/images/hero.png"
                  alt="Kitchen after 2"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        }
        title="Kitchen Transformation"
        description="Keuken wrappen is een techniek waarbij een dunne folie wordt aangebracht op keukenkasten, lades en andere oppervlakken. Dit zorgt voor een volledig nieuwe uitstraling zonder dat de kasten vervangen hoeven te worden. 
        Door je keuken te laten wrappen, geef je deze op een betaalbare manier een frisse look. Je hergebruikt de bestaande kasten en verandert alleen het uiterlijk met hoogwaardige folie in diverse kleuren en patronen. Zo geniet je van een vernieuwde keuken, zonder de hoge kosten en het gedoe van een complete renovatie."
        buttonText="VOORBEELDEN"
        buttonHref="/gallery"
        position="right"
        backgroundColor=""
      />

      <section className="bg-secondary p-20 mb-32">
        <h2 className="text-3xl text-primary font-bold text-dark max-w-[1440px] mx-auto w-screen pb-16">EEN OVERZICHT VAN DE KEUKENS</h2>
        <Carousel>  
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 1"
          />
          <Image
            width={2000}
            height={400}
            src="/images/hero.png"
            alt="Kitchen example 2"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 3"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 4"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 5"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 6"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 7"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 8"
          />
          <Image
            width={2000}
            height={300}
            src="/images/hero.png"
            alt="Kitchen example 9"
          />
        </Carousel>
      </section>
      

      <section className="mt-8 mb-32">
        <div className="max-w-[1440px] w-full flex flex-col justify-self-center  gap-8">
          <h1 className="text-3xl text-primary font-bold text-dark text-left">
            DE VOORDELEN VAN JE KEUKEN WRAPPEN
          </h1>
          <ol className="items-center align-middle">
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              NIEUWE LOOK ZONDER VERBOUWING
            </li>
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              ONEINDIG VEEL STIJLEN
            </li>
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              MODERNE EN TRENDY UITSTRALING
            </li>
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              VERBERGEN VAN BESCHADIGINGEN
            </li>
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              EENVOUDIG AAN TE PASSEN
            </li>
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              UNIFORME UITSTRALING
            </li>
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              MATTE OF GLANZENDE AFWERKING
            </li>
            <li className="h-15 flex items-center text-2xl font-bold border-t border-b border-gray-300">
              <CheckmarkSvg />
              LUXE UITSTRALING VOOR EEN LAGE PRIJS
            </li>
          </ol>
        </div>
      </section>

      {/* google review intergration */}
      <section className="max-w-[1440px] mt-7 w-full justify-self-center mb-32">
        <GoogleReviews placeId={placeId} maxReviews={3} className="" />
      </section>

      <Footer />
    </main>
  );
}
