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
        position === "right" ? "flex-row-reverse" : "flex-row"
      } items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto`}>
        <div className="relative w-1/2 h-full">
          {imageSection}
        </div>       
         <div className="w-1/2 space-y-4">
          <h2 className="text-3xl text-primary font-bold text-dark">{title}</h2>
          <p className=" text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
