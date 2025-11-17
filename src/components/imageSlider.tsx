"use client";
import { useEffect, useRef } from "react";

interface imageProps {
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
}

export default function ImageSlider({
  beforeImage,
  beforeAlt,
  afterImage,
  afterAlt,
}: imageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    containerRef.current.style.setProperty("--position", "50%");

    const onInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      containerRef.current!.style.setProperty("--position", `${value}%`);
    };

    sliderRef.current.addEventListener("input", onInput);

    // Cleanup when the component unmounts
    return () => sliderRef.current?.removeEventListener("input", onInput);
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="container grid place-content-center relative overflow-hidden rounded-2xl"
      >
        <div>
          <img
            className="w-[100%] h-[100%] object-cover object-top-left absolute start-0 w-[var(--position)]"
            src={beforeImage}
            alt={beforeAlt}
          />
          <img
            className="w-[100%] h-[100%] object-cover object-top-left"
            src={afterImage}
            alt={afterAlt}
          />
        </div>
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="slider absolute start-0 cursor-pointer opacity-0 w-[100%] h-[100%] focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Percentage of before photo shown"
        />
        <div className="absolute w-[.2rem] h-[100%] bg-white z-10 left-[var(--position)] -translate-x-[50%] pointer-events-none"></div>
        <div
          className="absolute bg-white color-black p-[.5rem] rounded-full grid place-content-center top-[50%] left-[var(--position)] -translate-[50%] pointer-events-none z-20 shadow-xs"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
