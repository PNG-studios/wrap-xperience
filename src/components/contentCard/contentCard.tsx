interface ContentCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  position?: "left" | "right";
  backgroundColor: string;
}

export default function ContentCard({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonHref,
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
              <a href={buttonHref}>{buttonText}</a>
            </div>
          </>
        ) : (
          <>
            <div className="contentCardItem">
              <h2>{title}</h2>
              <p>{description}</p>
              <a href={buttonHref}>{buttonText}</a>
            </div>
            <img src={imageSrc} alt={imageAlt} className="contentCardItem" />
          </>
        )}
      </div>
    </section>
  );
}
