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
    <section className="container">
      <div className="contentCard">
        <img src={imageSrc} alt={imageAlt} className="contentCardItem" />
        <div className="contentCardItem">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={buttonHref}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
