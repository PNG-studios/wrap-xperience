"use client";
import { on } from "events";
import { useState } from "react";
import styles from "./keukenEditWindow.module.css"


type Keuken = {
  id?: number;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  priority?: number;
  enabled?: number;
  onClose: () => void;
}

export default function KeukenEditWindow({ id, title, imageUrl, description, date, priority, enabled, onClose }: Keuken) {
  const [isOpen, setIsOpen] = useState(true);
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newState, setNewState] = useState(Number(enabled));
  const [newPriority, setNewPriority] = useState(priority);
  const color = "";

  const HandleSave = async () => {
    if (newDescription != description || newTitle != title || newImageUrl != imageUrl || newPriority != priority || newState != enabled) {
      const response = await fetch('/api/keukens', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          naam: newTitle,
          beschrijving: newDescription,
          fotoUrl: newImageUrl,
          prioriteit: newPriority,
          status: newState,
        }),
      });

      if (response.ok) {
        setIsOpen(false);
        window.location.reload();
      } else {
        setIsOpen(false);
        console.error('Fout bij updaten keuken');
      }
    }
    else {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;
  return (
    
    isOpen && (
      <div
        className={styles.container}
        onMouseDown={() => { setNewImageUrl(imageUrl); setNewTitle(title); setNewDescription(description); setNewPriority(priority); setNewState(Number(enabled)); onClose(); }}
      >
        <div
          className={styles.edit_window}
          onMouseDown={(e) => e.stopPropagation()} // voorkomt dat klik op modal de overlay sluit
        >
          <h1 className={styles.title}>Keuken Bewerken</h1>
          <button className={styles.button}
            onClick={() => { setNewImageUrl(imageUrl); setNewTitle(title); setNewDescription(description); setNewPriority(priority); setNewState(Number(enabled)); onClose(); }}>
            ✕
          </button>
          {/*Url*/}
          {imageUrl && <img src={newImageUrl} alt={title} className={styles.image} />}
          <input className={styles.input}
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
          />
          {/*Title*/}
          <input className={styles.input}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)} />
          {/*Description*/}
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className={styles.input}
          />
          {/*status*/}
          <div className={styles.flex}>
            <label className="font-semibold">
              Status:
              <select
                onChange={(e) => setNewState(Number(e.target.value))}
                className={`${styles.select} ${newState === 1 ? styles.green : styles.red}`}
                value={newState}
              >
                <option className={styles.green} value={1}>Actief</option>
                <option className={styles.red} value={0}>Inactief</option>
              </select>
            </label>
          </div>
          <div className={styles.flex}>
            <p className={styles.date}>Laatst bijgewerkt op: {date}</p>
            <button className={styles.button}
              onClick={async () => { HandleSave(); }}>
              Opslaan
            </button>
          </div>
        </div>
      </div>
    )
  )
};