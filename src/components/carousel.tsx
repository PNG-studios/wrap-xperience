"use client";

import { Children, useState, useEffect, ReactNode, useRef } from "react";

type CarouselProps = {
  itemsPerPage?: number
  itemsPerScroll?: number;
  gapPercentage?: number;
  arrowSizePercentage?: number;
  children: ReactNode;
};

export default function Carousel({itemsPerPage = 3, itemsPerScroll = 1, gapPercentage = 2, arrowSizePercentage = 3, children }: CarouselProps) {

  const [currentScroll, setCurrentScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
  const carouselTotalscrolls = (Children.count(children) - itemsPerPage) / itemsPerScroll;
  const leftButtonEnabled = currentScroll > 0;
  const rightButtonEnabled = currentScroll < carouselTotalscrolls;
  useEffect(() => {
    if (window.innerWidth < 640) {
      itemsPerPage = 1;
    } else {
      itemsPerPage = 3;
    }
  }, []);

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const item = carouselRef.current?.querySelector(".carousel-item") as HTMLElement;
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

  // const updateButtonStates = (direction: number) => {
  //   setCurrentScroll((prev) => {
  //     let next = prev + direction;
  //     if (next < 0) next = 0;
  //     if (next > carouselTotalscrolls) next = carouselTotalscrolls;
  //     console.log({ prev, next, carouselTotalscrolls });
  //     return next;
  //   });
  // };

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (carousel) {
      setIsDragging(true);
      setDragStart({
        x: e.pageX - carousel.offsetLeft,
        scrollLeft: carousel.scrollLeft
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const carousel = carouselRef.current;
    if (carousel) {
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - dragStart.x) * 1; // Scroll snelheid (hogere waarde = sneller)
      carousel.scrollLeft = dragStart.scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Snap naar de dichtstbijzijnde geldige positie
    const carousel = carouselRef.current;
    if (carousel) {
      // const item = carousel.querySelector(".carousel-item") as HTMLElement;
      const item = carouselRef.current?.querySelector(".carousel-item") as HTMLElement;
      if (item) {
        const itemWidth = item.offsetWidth;
        const gap = (carousel.offsetWidth * (gapPercentage / 100));
        const itemWithGap = itemWidth + gap;
        
        // Bereken welke scroll positie het dichtst bij is
        const nearestScroll = Math.round(carousel.scrollLeft / (itemsPerScroll * itemWithGap));
        const clampedScroll = Math.max(0, Math.min(nearestScroll, carouselTotalscrolls));
        
        // Snap naar de juiste positie
        const scrollAmount = clampedScroll * itemsPerScroll * itemWithGap;
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        setCurrentScroll(clampedScroll);
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const carouselItemWidth = ((100 - (gapPercentage * itemsPerPage - 1)) / itemsPerPage);

  return (
      <div className="flex max-w-[1440px] mx-auto">
        <button style={{ opacity: leftButtonEnabled ? 1 : 0.2, fontSize: `${100 * arrowSizePercentage}%` }} onClick={() => scrollCarousel(-1)} disabled={!leftButtonEnabled}>&lt;</button>
        <div 
          className="overflow-hidden w-full flex text-3% cursor-grab select-none" 
          id="carousel"
          ref={carouselRef}
          style={{ 
            gap: `${gapPercentage}%`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {Children.map(children, (child, idx) => (
            <div 
              className="carousel-item hover:scale-105 hover:brightness-70 transition duration-300 pointer-events-none" 
              style={{ width: `${carouselItemWidth}%` }} 
              key={idx}
            >
              {child}
            </div>
          ))}
        </div>
        <button style={{ opacity: rightButtonEnabled ? 1 : 0.2, fontSize: `${100 * arrowSizePercentage}%` }} onClick={() => scrollCarousel(1)} disabled={!rightButtonEnabled}>&gt;</button>
      </div>
  );
}