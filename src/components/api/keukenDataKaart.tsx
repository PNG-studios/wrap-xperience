"use client";
import Styles from "./keukenDataKaart.module.css"
import { useState } from "react";
import KeukenEditWindow from "./keukenEditWindow";

type Keuken = {
  id?: number;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  priority?: number;
  enabled?: number;
};

export default function KeukenKaart({ id, title, imageUrl, description, date, priority, enabled }: Keuken) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={Styles.card}
        onClick={() => { setIsOpen(true); }}
      >
        <div className={Styles.image_container}>
          {imageUrl && (
            <img src={imageUrl} alt={imageUrl} width={400} height={400} />
          )}
        </div>
        <div className={Styles.content}>
          <div>
            <h2 className={Styles.title}>{title}</h2>
            <p className={Styles.description}>{description}</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Bijgewerkt op: {date}</p>
        </div>
      </div>
      {isOpen && <KeukenEditWindow id={id} title={title} imageUrl={imageUrl} description={description} date={date} priority={priority} enabled={enabled}  onClose={() => setIsOpen(false)}/>}
    </>
  );
}