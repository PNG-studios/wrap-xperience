import ImageSlider from "../imageSlider/imageSlider";
import styles from "./portfolioExample.module.css";

interface PortfolioExampleProps {
  title: string;
  imageBeforeSrc: string[];
  imageAfterSrc: string[];
  imageBeforeAlt: string[];
  imageAfterAlt: string[];
}

function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export default function PortfolioExample({
  title,
  imageBeforeSrc,
  imageAfterSrc,
  imageBeforeAlt,
  imageAfterAlt,
}: PortfolioExampleProps) {
  const beforeImages = toArray(imageBeforeSrc);
  const afterImages = toArray(imageAfterSrc);
  const beforeAlts = toArray(imageBeforeAlt);
  const afterAlts = toArray(imageAfterAlt);

  return (
    <section className={styles.container}>
        <div className={styles.kitchens}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.kitchen__items}>
            {imageBeforeSrc.map((src, index) => (
              <ImageSlider
                key={index}
                beforeImageSrc={beforeImages[index]}
                beforeImageAlt={beforeAlts[index]}
                afterImageSrc={afterImages[index]}
                afterImageAlt={afterAlts[index]}
              />
            ))}
          </div>
        </div>
    </section>
  );
}
