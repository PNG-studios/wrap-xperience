interface ContentCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  reverse?: boolean; // Optional prop to reverse layout
}

export default function ContentCard({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonHref,
  reverse = false,
}: ContentCardProps) {
  return (
    <section
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } my-15  justify-center  gap-8 p-8`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-[7.5rem]  w-full max-w-[1440px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-1/2 h-auto  rounded-lg object-fill"
        />

        <div className="w-1/2 space-y-4">
          <h2 className="text-3xl text-primary font-bold text-dark">{title}</h2>
          <p className=" text-gray-600 leading-relaxed">{description}</p>
          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl transition-colors">
            <a href={buttonHref}>{buttonText}</a>
          </button>
        </div>
      </div>
    </section>
  );
}
