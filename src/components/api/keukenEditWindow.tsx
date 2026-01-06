"use client";
import { useState } from "react";
import styles from "./keukenEditWindow.module.css";

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
  onClose: () => void;
};

export default function KeukenEditWindow({
  id,
  title,
  imageUrlBefore,
  imageUrlAfter,
  imageAltBefore,
  imageAltAfter,
  date,
  priority,
  enabled,
  onClose,
}: Keuken) {
  const [isOpen, setIsOpen] = useState(true);
  const [newTitle, setNewTitle] = useState(title ?? "");
  const [newPriority, setNewPriority] = useState(priority ?? 0);
  const [newState, setNewState] = useState(enabled ?? 0);

  const [newImageUrlBefore, setNewImageUrlBefore] = useState<string[]>(
    imageUrlBefore?.length ? [...imageUrlBefore] : [""]
  );
  const [newImageAltBefore, setNewImageAltBefore] = useState<string[]>(
    imageAltBefore?.length ? [...imageAltBefore] : [""]
  );
  const [newImageUrlAfter, setNewImageUrlAfter] = useState<string[]>(
    imageUrlAfter?.length ? [...imageUrlAfter] : [""]
  );
  const [newImageAltAfter, setNewImageAltAfter] = useState<string[]>(
    imageAltAfter?.length ? [...imageAltAfter] : [""]
  );

  // Helper to update a single item in an array
  const handleArrayChange = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    value: string
  ) => {
    setter((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const HandleSave = async () => {
    const safeImageUrlBefore: string[] = newImageUrlBefore ?? [];
    const safeImageUrlAfter: string[] = newImageUrlAfter ?? [];
    const safeImageAltBefore: string[] = newImageAltBefore ?? [];
    const safeImageAltAfter: string[] = newImageAltAfter ?? [];

    const arraysEqual = (a: string[], b: string[]) =>
      a.length === b.length && a.every((v, i) => v === b[i]);

    const hasChanged =
      newTitle !== title ||
      newPriority !== priority ||
      newState !== enabled ||
      !arraysEqual(safeImageUrlBefore, imageUrlBefore ?? []) ||
      !arraysEqual(safeImageAltBefore, imageAltBefore ?? []) ||
      !arraysEqual(safeImageUrlAfter, imageUrlAfter ?? []) ||
      !arraysEqual(safeImageAltAfter, imageAltAfter ?? []);

    if (!hasChanged) {
      setIsOpen(false);
      return;
    }

    try {
      const response = await fetch("/api/keukens", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          naam: newTitle,
          prioriteit: newPriority,
          status: newState,
          fotoUrlBefore: safeImageUrlBefore, // array
          fotoAltBefore: safeImageAltBefore, // array
          fotoUrlAfter: safeImageUrlAfter,
          fotoAltAfter: safeImageAltAfter,
        }),
      });

      const data: any = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("Fout bij updaten keuken", data);
        setIsOpen(false);
        return;
      }

      setIsOpen(false);
      window.location.reload();
    } catch (err) {
      console.error("Er is een fout opgetreden:", err);
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.container}
      onMouseDown={() => {
        setIsOpen(false);
        onClose();
      }}
    >
      <div
        className={styles.edit_window}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h1 className={styles.contatiner_title}>Keuken Bewerken</h1>
        <button
          className={styles.close_button}
          onClick={() => {
            setIsOpen(false);
            onClose();
          }}
        >
          ✕
        </button>

        {/* Title */}
        <input
          className={styles.input}
          value={newTitle}
          placeholder="Titel"
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <div className={styles.image_input_container}>
          <div>
          {/* Before Images */}
        <h3>Before Images</h3>
        {newImageUrlBefore.map((url, i) => (
          <div key={i} className={styles.image_input_group}>
            {url && (
              <img
                src={url}
                alt={newImageAltBefore[i] ?? ""}
                className={styles.image}
              />
            )}
            <input
              value={url ?? ""}
              placeholder="URL"
              onChange={(e) =>
                handleArrayChange(setNewImageUrlBefore, i, e.target.value)
              }
              className={styles.input}
            />
            <input
              value={newImageAltBefore[i] ?? ""}
              placeholder="Alt Text"
              onChange={(e) =>
                handleArrayChange(setNewImageAltBefore, i, e.target.value)
              }
              className={styles.input}
            />
          </div>
        ))}
        <button className={styles.add_image_button}
          onClick={() => {
            setNewImageUrlBefore([...newImageUrlBefore, ""]);
            setNewImageAltBefore([...newImageAltBefore, ""]);
          }}
        >
          Voeg Before Image toe
        </button>
        </div>

        <div>
          {/* After Images */}
        <h3>After Images</h3>
        {newImageUrlAfter.map((url, i) => (
          <div key={i} className={styles.image_input_group}>
            {url && (
              <img
                src={url}
                alt={newImageAltAfter[i] ?? ""}
                className={styles.image}
              />
            )}
            <input
              value={url ?? ""}
              placeholder="URL"
              onChange={(e) =>
                handleArrayChange(setNewImageUrlAfter, i, e.target.value)
              }
              className={styles.input}
            />
            <input
              value={newImageAltAfter[i] ?? ""}
              placeholder="Alt Text"
              onChange={(e) =>
                handleArrayChange(setNewImageAltAfter, i, e.target.value)
              }
              className={styles.input}
            />
          </div>
        ))}
        <button className={styles.add_image_button}
          onClick={() => {
            setNewImageUrlAfter([...newImageUrlAfter, ""]);
            setNewImageAltAfter([...newImageAltAfter, ""]);
          }}
        >
          Voeg After Image toe
        </button>
        </div>
        </div>

        {/* Status */}
        <div className={styles.flex}>
          <label className="font-semibold">
            Status:
            <select
              value={newState}
              onChange={(e) => setNewState(Number(e.target.value))}
              className={newState === 0 ? styles.red : styles.green}
            >
              <option value={1}>Actief</option>
              <option value={0}>Inactief</option>
            </select>
          </label>
        </div>

        <div className={styles.flex}>
          <p className={styles.date}>Laatst bijgewerkt op: {date}</p>
          <button className={styles.save_button} onClick={HandleSave}>
            Opslaan
          </button>
        </div>
      </div>
    </div>
  );
}
