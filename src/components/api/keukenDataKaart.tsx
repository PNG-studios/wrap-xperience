"use client";

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
        className="border rounded-lg p-4 w-66 max-w-66 shadow-md flex  flex-col hover:cursor-pointer hover:scale-105 transition-transform hover:bg-gray-100"
        onClick={() => { setIsOpen(true); }}
      >
        <div className="w-full h-40 overflow-hidden flex justify-center items-center mb-4">
          {imageUrl && (
            <img src={imageUrl} alt={imageUrl} width={1000} />
          )}
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p className="text-gray-700 mt-1 line-clamp-5">{description}</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Bijgewerkt op: {date}</p>
        </div>
      </div>
      {isOpen && <KeukenEditWindow id={id} title={title} imageUrl={imageUrl} description={description} date={date} priority={priority} enabled={enabled}  onClose={() => setIsOpen(false)}/>}
    </>
  );
}