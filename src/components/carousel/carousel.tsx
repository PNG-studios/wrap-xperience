"use client";

import { Children, useState, useEffect, ReactNode, useRef } from "react";
import styles from "./carousel.module.css";

type CarouselProps = {
  itemsPerPage?: number;
  itemsPerScroll?: number;
  gapPercentage?: number;
  arrowSizePercentage?: number;
  children: ReactNode;
};

export default function Carousel({
  itemsPerPage = 3,
  itemsPerScroll = 1,
  gapPercentage = 2,
  arrowSizePercentage = 3,
  children,
}: CarouselProps) {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
  const carouselTotalscrolls =
    (Children.count(children) - itemsPerPage) / itemsPerScroll;
  const leftButtonEnabled = currentScroll > 0;
  const rightButtonEnabled = currentScroll < carouselTotalscrolls;
  const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage);
  const [arrowSizePercentageState, setArrowSizePercentageState] =
    useState(arrowSizePercentage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPageState(1);
        setArrowSizePercentageState(5);
      } else if (width < 1024) {
        setItemsPerPageState(2);
        setArrowSizePercentageState(4);
      } else {
        setItemsPerPageState(itemsPerPage);
        setArrowSizePercentageState(arrowSizePercentage);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const item = carouselRef.current?.querySelector(
        `.${styles.carousel__item}`
      ) as HTMLElement;
      if (item) {
        const itemWidth = item.offsetWidth;
        const gap = carousel.offsetWidth * (gapPercentage / 100);

        let nextScroll = currentScroll + direction;
        if (nextScroll < 0) nextScroll = 0;
        if (nextScroll > carouselTotalscrolls)
          nextScroll = carouselTotalscrolls;

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
        scrollLeft: carousel.scrollLeft,
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
      const item = carouselRef.current?.querySelector(
        `.${styles.carousel__item}`
      ) as HTMLElement;
      if (item) {
        const itemWidth = item.offsetWidth;
        const gap = carousel.offsetWidth * (gapPercentage / 100);
        const itemWithGap = itemWidth + gap;

        // Bereken welke scroll positie het dichtst bij is
        const nearestScroll = Math.round(
          carousel.scrollLeft / (itemsPerScroll * itemWithGap)
        );
        const clampedScroll = Math.max(
          0,
          Math.min(nearestScroll, carouselTotalscrolls)
        );

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

  const carouselItemWidth =
    (100 - (gapPercentage * itemsPerPageState - 1)) / itemsPerPageState;

  return (
    <div className={styles.container}>
      <button
        style={{
          opacity: leftButtonEnabled ? 1 : 0.2,
          fontSize: `${100 * arrowSizePercentageState}%`,
        }}
        onClick={() => scrollCarousel(-1)}
        disabled={!leftButtonEnabled}
      >
        &lt;
      </button>
      <div
        className={styles.carousel}
        id="carousel"
        ref={carouselRef}
        style={{
          gap: `${gapPercentage}%`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {Children.map(children, (child, idx) => (
          <div
            className={styles.carousel__item}
            style={{ width: `${carouselItemWidth}%` }}
            key={idx}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        style={{
          opacity: rightButtonEnabled ? 1 : 0.2,
          fontSize: `${100 * arrowSizePercentageState}%`,
        }}
        onClick={() => scrollCarousel(1)}
        disabled={!rightButtonEnabled}
      >
        &gt;
      </button>
    </div>
  );
}