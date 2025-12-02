interface ContentCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
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
    <section className="container">
      <div className="contentCard">
        <img src={imageSrc} alt={imageAlt} className="contentCardItem" />
        <div className="contentCardItem">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
