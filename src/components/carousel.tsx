
"use client";

import { Calculator } from "lucide-react";
import { Children } from "react";

import { ReactNode } from "react";

type CarouselProps = {
  itemsPerPage?: number;
  gapPercentage?: number;
  arrowSizePercentage?: number;
  children: ReactNode;
};

export default function Carousel({ itemsPerPage = 3, gapPercentage = 1, arrowSizePercentage = 2, children }: CarouselProps) {
  const scrollLeft = () => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    } 
  };

  const scrollRight = () => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      const item = carousel.querySelector(".carousel-item") as HTMLElement;
      if (item) {
        const itemWidth = item.offsetWidth;
        const style = window.getComputedStyle(item);
        const gap = parseFloat(style.marginRight) || (carousel.offsetWidth * (gapPercentage / 100));
        carousel.scrollBy({ left: itemWidth + gap, behavior: "smooth" });
        console.log({ itemWidth, gap });
      }
    }
  };

  const carouselItemWidth = ((100 - (gapPercentage * itemsPerPage - 1)) / itemsPerPage);
  return (
      <div className="flex max-w-[1440px] mx-auto ">
        <button style={{ fontSize: `${100 * arrowSizePercentage}%` }} onClick={scrollLeft}>←</button>
        <div className="carousel flex text-3%" id="carousel" style={{ gap: `${gapPercentage}%` }}>
          {Children.map(children, (child, idx) => (
            <div className="carousel-item" style={{ width: `${carouselItemWidth}%` }} key={idx}>
              {child}
            </div>
          ))}
        </div>
        <button style={{ fontSize: `${100 * arrowSizePercentage}%` }} onClick={scrollRight}>→</button>
      </div>
  );
}

