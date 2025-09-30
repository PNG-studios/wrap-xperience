import Navbar from "@/components/navbar";
import ContentCard from "@/components/contentCard";
import StarContent from "@/components/starContent";
import Image from "next/image";
import GoogleReviews from "@/components/googleReviews";
import Carousel from "@/components/carousel";
// import Kitchens from "@/components/Kitchens";

const placeId = process.env.NEXT_PUBLIC_PLACE_ID || "ChIJN1t_tDeuEmsRUsoyG83frY4";

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
      />

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

      <section className="max-w-[1440px] mt-7 w-full justify-self-center ">
        <GoogleReviews
                placeId={placeId}
                maxReviews={3}
                className="" 
              />
      </section>
    </main>
  );
}
