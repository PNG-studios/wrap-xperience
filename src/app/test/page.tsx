import Carousel from "@/components/carousel";

export default function TestPage() {
  return (
    <main>
      <Carousel itemsPerPage={2} gapPercentage={1} arrowSizePercentage={2}>
        <h3>Item 1</h3>
        <h3>Item 2</h3>
        <h3>Item 3</h3>
        <h3>Item 4</h3>
        <h3>Item 5</h3>
        <h3>Item 6</h3>
        <h3>Item 7</h3>
        <h3>Item 8</h3>
      </Carousel>
    </main>
  );
}
