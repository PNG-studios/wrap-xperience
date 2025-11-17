import Header from "@/components/header";
import PortfolioExample from "@/components/portfolioExample";

export default function Portfolio() {
  return (
    <>
      <main>
        <Header backgroundImage1="/images/hero.png" title="PORTFOLIO" />

        <PortfolioExample
          title="Test Title"
          imageBefore={["/images/hero.png", "/images/hero.png"]}
          altBefore={["image 1", "image 2"]}
          imageAfter={["/images/hero.png", "/images/hero.png"]}
          altAfter={["image 1", "image 2"]}
        />
      </main>
    </>
  );
}
