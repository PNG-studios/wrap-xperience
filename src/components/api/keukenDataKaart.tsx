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
  prioriteit?: number;
  status?: number;
};

export default function KeukenKaart({
  id,
  title,
  imageUrlBefore = [],
  imageUrlAfter = [],
  imageAltBefore = [],
  imageAltAfter = [],
  date,
  prioriteit,
  status,
}: Keuken) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={Styles.card}
        onClick={() => setIsOpen(true)}
      >
        <div className={Styles.image_container}>
          {imageUrlAfter[0] && (
            <img src={imageUrlAfter[0]} alt={imageAltAfter[0] || "After image"} />
          )}
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
          priority={prioriteit}
          enabled={status}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
