
"use client";

import { Children, useState } from "react";
import { ReactNode } from "react";

type CarouselProps = {
  itemsPerPage?: number
  itemsPerScroll?: number;
  gapPercentage?: number;
  arrowSizePercentage?: number;
  children: ReactNode;
};

export default function Carousel({ itemsPerPage = 3, itemsPerScroll = 1, gapPercentage = 2, arrowSizePercentage = 3, children }: CarouselProps) {

  const [currentScroll, setCurrentScroll] = useState(0);
  const carouselTotalscrolls = (Children.count(children) - itemsPerPage) / itemsPerScroll;
  const leftButtonEnabled = currentScroll > 0;
  const rightButtonEnabled = currentScroll < carouselTotalscrolls;

  const scrollCarousel = (direction: number) => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      const item = carousel.querySelector(".carousel-item") as HTMLElement;
      if (item) {
        const itemWidth = item.offsetWidth;
        const gap = (carousel.offsetWidth * (gapPercentage / 100));
        
        let nextScroll = currentScroll + direction;
        if (nextScroll < 0) nextScroll = 0;
        if (nextScroll > carouselTotalscrolls) nextScroll = carouselTotalscrolls;

        const scrollAmount = nextScroll * itemsPerScroll * (itemWidth + gap);
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        setCurrentScroll(nextScroll);
      }
    }
  };

  const updateButtonStates = (direction: number) => {
    setCurrentScroll((prev) => {
      let next = prev + direction;
      if (next < 0) next = 0;
      if (next > carouselTotalscrolls) next = carouselTotalscrolls;
      console.log({ prev, next, carouselTotalscrolls });
      return next;
    });
  };

  const carouselItemWidth = ((100 - (gapPercentage * itemsPerPage - 1)) / itemsPerPage);

  return (
      <div className="flex max-w-[1440px] mx-auto ">
        <button style={{ opacity: leftButtonEnabled ? 1 : 0.2, fontSize: `${100 * arrowSizePercentage}%` }} onClick={() => scrollCarousel(-1)} disabled={!leftButtonEnabled}>&lt;</button>
        <div className="overflow-hidden w-full flex text-3%" id="carousel" style={{ gap: `${gapPercentage}%` }}>
          {Children.map(children, (child, idx) => (
            <div className="carousel-item hover:scale-105 hover:brightness-70 transition duration-300" style={{ width: `${carouselItemWidth}%` }} key={idx}>
              {child}
            </div>
          ))}
        </div>
        <button style={{ opacity: rightButtonEnabled ? 1 : 0.2, fontSize: `${100 * arrowSizePercentage}%` }} onClick={() => scrollCarousel(1)} disabled={!rightButtonEnabled}>&gt;</button>
      </div>
  );
}
