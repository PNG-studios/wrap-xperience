"use client";

import Styles from "./keukenDataKaart.module.css";
import { useState } from "react";
import KeukenEditWindow from "./keukenEditWindow";

type Keuken = {
  id?: number;
  title: string;
  imageUrlBefore: string[];
  imageUrlAfter: string[];
  imageAltBefore: string[];
  imageAltAfter: string[];
  date: string;
  priority?: number;
  enabled?: number;
};

export default function KeukenKaart({
  id,
  title,
  imageUrlBefore = [],
  imageUrlAfter = [],
  imageAltBefore = [],
  imageAltAfter = [],
  date,
  priority,
  enabled,
}: Keuken) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={Styles.card}
        onClick={() => setIsOpen(true)}
      >
        <div className={Styles.image_container}>
          {/* Render all 'before' images */}
          {imageUrlBefore.map((src, i) => (
            <img
              key={`before-${i}`}
              src={src}
              alt={imageAltBefore[i] || `Before image ${i + 1}`}
              width={400}
              height={400}
            />
          ))}

          {/* Render all 'after' images */}
          {imageUrlAfter.map((src, i) => (
            <img
              key={`after-${i}`}
              src={src}
              alt={imageAltAfter[i] || `After image ${i + 1}`}
              width={400}
              height={400}
            />
          ))}
        </div>

        <div className={Styles.content}>
          <h2 className={Styles.title}>{title}</h2>
          <p className={Styles.description}>{imageAltBefore.join(", ")}</p>
          <p className={Styles.date}>Bijgewerkt op: {date}</p>
        </div>
      </div>

      {isOpen && (
        <KeukenEditWindow
          id={id}
          title={title}
          imageUrlBefore={imageUrlBefore}
          imageUrlAfter={imageUrlAfter}
          imageAltBefore={imageAltBefore}
          imageAltAfter={imageAltAfter}
          date={date}
          priority={priority}
          enabled={enabled}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
