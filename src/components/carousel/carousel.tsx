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
  gapPercentage = 3,
  arrowSizePercentage = 3,
  children,
}: CarouselProps) {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
  const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage);
  const [arrowSizePercentageState, setArrowSizePercentageState] =
    useState(arrowSizePercentage);

  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = Children.count(children);
  const carouselTotalscrolls = (totalItems - itemsPerPageState) / itemsPerScroll;
  const leftButtonEnabled = currentScroll > 0;
  const rightButtonEnabled = currentScroll < carouselTotalscrolls;

  // Responsive items per page
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

  const scrollCarousel = (direction: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const item = carousel.querySelector(`.${styles.carousel__item}`) as HTMLElement;
      if (!item) return;

      const itemWidth = item.offsetWidth;
      const gap = carousel.offsetWidth * (gapPercentage / 100) / (itemsPerPageState - 1);

      let nextScroll = currentScroll + direction;
      nextScroll = Math.max(0, Math.min(nextScroll, carouselTotalscrolls));

      const scrollAmount = nextScroll * itemsPerScroll * (itemWidth + gap);
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setCurrentScroll(nextScroll);
    }
  };

  // Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    setIsDragging(true);
    setDragStart({ x: e.pageX - carousel.offsetLeft, scrollLeft: carousel.scrollLeft });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const carousel = carouselRef.current;
    if (!carousel) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = x - dragStart.x;
    carousel.scrollLeft = dragStart.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const carousel = carouselRef.current;
    if (!carousel) return;

    const item = carousel.querySelector(`.${styles.carousel__item}`) as HTMLElement;
    if (!item) return;

    const gap = carousel.offsetWidth * (gapPercentage / 100) / (itemsPerPageState - 1);
    const itemWithGap = item.offsetWidth + gap;

    const nearestScroll = Math.round(carousel.scrollLeft / (itemsPerScroll * itemWithGap));
    const clampedScroll = Math.max(0, Math.min(nearestScroll, carouselTotalscrolls));

    carousel.scrollTo({ left: clampedScroll * itemsPerScroll * itemWithGap, behavior: "smooth" });
    setCurrentScroll(clampedScroll);
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  // Correct width per item
  const carouselItemWidth = (100 - gapPercentage) / itemsPerPageState;
  const gapPerItem = gapPercentage / (itemsPerPageState - 1);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
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
        ref={carouselRef}
        style={{ gap: `${gapPerItem}%`, cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {Children.map(children, (child, idx) => (
          <div
            key={idx}
            className={styles.carousel__item}
            style={{ width: `${carouselItemWidth}%` }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        className={styles.button}
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
