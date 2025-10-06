

interface ContentCardProps {
  imageSection: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  position?: "left" | "right";
}

export default function ContentCard({
  imageSection,
  title,
  description,
  buttonText,
  buttonHref,
  position = "left",
}: ContentCardProps) {
  return (
    <section className="my-15 justify-center gap-8 p-8">
      <div className={`flex ${
        position === "right" ? "flex-row-reverse" : "flex-row"
      } items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto`}>
        <div className="relative w-1/2 h-full">
          {imageSection}
        </div>       
         <div className="w-1/2 space-y-4">
          <h2 className="text-3xl text-primary font-bold text-dark">{title}</h2>
          <p className=" text-gray-600 leading-relaxed">{description}</p>
          <a className="bg-primary hover:bg-primary/80 text-white px-6 py-3 p-5 rounded-xl transition-colors" href={buttonHref}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
