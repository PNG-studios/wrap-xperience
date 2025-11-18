import Header from "@/components/header";
import Footer from "@/components/footer";
import TextAnimation from "@/components/textAnimation";

export default function Portfolio() {
  return (
    <>
      <main>
        <Header backgroundImage1="/images/hero.png" title="OVER ONS" />

        <section className="my-15 justify-center gap-8 p-8">
          <div className="flex sm:flex-row flex-col flex-col-reverse items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto">
            <div className="relative sm:w-1/2 w-full h-full">
              <img src="/images/hero.png" alt="" />
            </div>
            <div className="sm:w-1/2 w-full space-y-4">
              <img src="" alt="Logo" />
              <p className="sm:text-xl text-[2.5rem] text-gray-600 leading-relaxed">
                Hey, ik ben Danny van wrap-xperience. Keukens wrappen is al van
                jongs af aan een passie van mij geweest. Ik ben begonnen in het
                wrappen van auto’s en ben nu Gespecialiseerd in het wrappen van
                alle soorten meubels.
              </p>
              <button className="sm:text-xl text-[2.5rem] bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl transition-colors">
                <a href="/contact">Neem contact op</a>
              </button>
            </div>
          </div>
        </section>

        <section className="my-15 justify-center gap-8 p-8">
          <div className="flex sm:flex-row flex-col items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto">
            <div className="sm:w-1/2 w-full space-y-4">
              <h2 className="sm:text-3xl text-[5rem] text-primary font-bold text-dark">
                Kwaliteit
              </h2>
              <ol className="sm:text-xl text-[2.5rem] text-gray-600 leading-relaxed">
                <li>Krasbestendig</li>
                <li>Vuilafstotend</li>
                <li>Waterbestendig</li>
                <li>UV bestendig</li>
                <li>Hittebestendig tot 110 graden</li>
                <li>Anti bacterieel oppervlak</li>
              </ol>
            </div>

            <div className="relative sm:w-1/2 w-full h-full">
              <img src="/images/hero.png" alt="" />
            </div>
          </div>
        </section>

        <TextAnimation />
      </main>
      <Footer />
    </>
  );
}
