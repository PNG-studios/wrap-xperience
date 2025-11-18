import ImageSlider from "./imageSlider";

interface PortfolioProps {
  title: string;
  imageBefore: string | string[];
  altBefore: string | string[];
  imageAfter: string | string[];
  altAfter: string | string[];
}

function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export default function PortfolioExample({
  title,
  imageBefore,
  altBefore,
  imageAfter,
  altAfter,
}: PortfolioProps) {
  const beforeImages = toArray(imageBefore);
  const beforeAlts = toArray(altBefore);
  const afterImages = toArray(imageAfter);
  const afterAlts = toArray(altAfter);

  return (
    <section className="flex my-15 justify-center gap-8 p-8">
      <div className="flex flex-col items-center justify-between gap-[7.5rem] w-full max-w-[1440px] mx-auto`">
        <div className="flex flex-col gap-[2rem]">
          <h2 className="text-6xl text-dark font-bold text-dark">{title}</h2>
          <div className="sm:grid grid-cols-2 auto-rows-min [&>*:nth-child(3n+1)]:col-span-2 gap-8">
            {beforeImages.map((src, index) => (
              <ImageSlider
                key={index}
                beforeImage={beforeImages[index]}
                beforeAlt={beforeAlts[index]}
                afterImage={afterImages[index]}
                afterAlt={afterAlts[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
