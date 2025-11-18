interface ContentCardProps {
  imageSection: React.ReactNode;
  title: string;
  description: string;
  position?: "left" | "right";
  backgroundColor: string;
}

export default function ContentCardSimple({
  imageSection,
  title,
  description,
  position = "left",
  backgroundColor,
}: ContentCardProps) {
  return (
    <section style={{backgroundColor}} className="flex mt-15 justify-center gap-8 p-8 py-16">
      <div className={`flex ${
        position === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
      } flex-col flex-col-reverse items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto`}>
        <div className="relative sm:w-1/2 w-full h-full">
          {imageSection}
        </div>       
         <div className="sm:w-1/2 w-full space-y-4">
          <h2 className="sm:text-3xl text-[8vw] text-primary font-bold text-dark">{title}</h2>
          <p className="sm:text-xl text-[2.5rem] text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
