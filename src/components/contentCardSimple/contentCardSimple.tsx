interface ContentCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  position?: "left" | "right";
  backgroundColor: string;
}

export default function ContentCardSimple({
  imageSrc,
  imageAlt,
  title,
  description,
  position = "left",
  backgroundColor,
}: ContentCardProps) {
  return (
    <section className="container" style={{ backgroundColor }}>
      <div className="contentCard">
        {position === "left" ? (
          <>
            <img src={imageSrc} alt={imageAlt} className="contentCardItem" />
            <div className="contentCardItem">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="contentCardItem">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <img src={imageSrc} alt={imageAlt} className="contentCardItem" />
          </>
        )}
      </div>
    </section>
  );
}
