import Header from "@/components/header";

export default function Portfolio() {
  return (
    <>
      <Header backgroundImage1="/images/hero.png" title="OVER ONS" />

      <section className="my-15 justify-center gap-8 p-8">
        <div className="flex flex-row items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto">
          <div className="relative w-1/2 h-full">
            <img src="/images/hero.png" alt="" />
          </div>
          <div className="w-1/2 space-y-4">
            <img src="" alt="Logo" />
            <p className=" text-gray-600 leading-relaxed">
              Hey, ik ben Danny van wrap-xperience. Keukens wrappen is al van
              jongs af aan een passie van mij geweest. Ik ben begonnen in het
              wrappen van auto’s en ben nu Gespecialiseerd in het wrappen van
              alle soorten meubels.
            </p>
            <button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl transition-colors">
              <a href="/contact">Neem contact op</a>
            </button>
          </div>
        </div>
      </section>

      <section className="my-15 justify-center gap-8 p-8">
        <div className="flex flex-row items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto">
          <div className="w-1/2 space-y-4">
            <h2 className="text-3xl text-primary font-bold text-dark">Kwaliteit</h2>
            <ol className=" text-gray-600 leading-relaxed">
              <li>Krasbestendig</li>
              <li>Vuilafstotend</li>
              <li>Waterbestendig</li>
              <li>UV bestendig</li>
              <li>Hittebestendig tot 110 graden</li>
              <li>Anti bacterieel oppervlak</li>
            </ol>
          </div>

          <div className="relative w-1/2 h-full">
            <img src="/images/hero.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}