import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import PortfolioExample from "@/components/portfolioExample/portfolioExample"

export default function Portfolio() {
    return (
        <main>
        <Header title="Portfolio" backgroundImageSrc="/images/hero.png" />

        <PortfolioExample
          title="Keuken 1"
          imageBeforeSrc={["/images/hero.png", "/images/hero.png", "/images/hero.png", "/images/hero.png", "/images/hero.png"]}
          imageBeforeAlt={["image 1", "image 2", "image 3", "image 4", "image 5"]}
          imageAfterSrc={["/images/hero.png","/images/hero.png", "/images/hero.png", "/images/hero.png",  "/images/hero.png"]}
          imageAfterAlt={["image 1", "image 2", "image 3", "image 4", "image 5"]}
        />

        <Footer />
        </main>
    )
}