

interface ContentCardProps {
  imageSection: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  position?: "left" | "right";
  backgroundColor: string;
}

export default function ContentCard({
  imageSection,
  title,
  description,
  buttonText,
  buttonHref,
  position = "left",
  backgroundColor,
}: ContentCardProps) {
  return (
    <section style={{backgroundColor}} className="my-15 justify-center gap-8 p-8 py-16">
      <div className={`flex ${
        "sm:" + (position === "right" ? "flex-row-reverse" : "flex-row")
      } flex-col flex-col-reverse items-center justify-between gap-[7.5rem] w-[100%] max-w-[1440px] mx-auto`}>
        <div className="relative sm:w-1/2 w-full h-full">
          {imageSection}
        </div>       
         <div className="sm:w-1/2 w-full space-y-4">
          <h2 className="sm:text-3xl text-5xl text-primary font-bold text-dark">{title}</h2>
          <p className="sm:text-xl text-3xl text-gray-600 leading-relaxed">{description}</p>
          <a className="bg-primary hover:bg-primary/80 text-white px-6 py-3 p-5 rounded-xl transition-colors" href={buttonHref}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
