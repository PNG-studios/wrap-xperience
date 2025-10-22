import { Component } from "lucide-react";
import { use, useState } from "react";

type ApiCardProps = {
  id?: number;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  priority?: number;
  enabled?: number;
};

export default function ApiCard({ id, title, imageUrl, description, date, priority, enabled }: ApiCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newState, setNewState] = useState(Number(enabled));
  const [newPriority, setNewPriority] = useState(priority);

  return (
    <>
    <div 
      className="border rounded-lg p-4 w-64 max-w-64 shadow-md flex  flex-col hover:cursor-pointer hover:scale-105 transition-transform hover:bg-gray-100" 
    onClick={() => { setIsOpen(true); console.log(newState); console.log(newPriority); }}
    >
      <div className="w-full h-40 overflow-hidden flex justify-center items-center mb-4">
        {imageUrl && (
          <img src={imageUrl} alt={imageUrl} width={1000}/>
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
     {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800/70 flex justify-center items-center z-50"
          onMouseDown={() => { setIsOpen(false); setNewImageUrl(imageUrl); setNewTitle(title); setNewDescription(description); setNewPriority(priority); setNewState(enabled); }}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-xl shadow-lg relative"
            onMouseDown={(e) => e.stopPropagation()} // voorkomt dat klik op modal de overlay sluit
          >
            <h1 className="text-3xl font-bold mb-4 text-center">Keuken Bewerken</h1>
            <button className="absolute top-2 right-3 text-gray-500 font-extrabold hover:text-gray-800 text-2xl" 
              onClick={() => { setIsOpen(false); setNewImageUrl(imageUrl); setNewTitle(title); setNewDescription(description); setNewPriority(priority); setNewState(enabled); }}>
              ✕
            </button>
            {/*Url*/}
            {imageUrl && <img src={newImageUrl} alt={title} className="w-full h-64 object-cover  rounded"/>}
            <input className="w-full placeholder-black hover:text-gray-500 hover:cursor-pointer hover:outline-solid rounded outline-1 mb-4 outline-none h-5 overflow-hidden resize-none"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
            />
            {/*Title*/}
            <input className="w-full placeholder-black  hover:text-gray-500 hover:cursor-pointer text-2xl font-bold mb-4 outline-none"
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)} />
            {/*Description*/}
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full placeholder-black hover:text-gray-500 hover:cursor-pointer hover:outline-solid rounded mb-4 outline-none h-25"
            />
            {/*status*/}
            <div className="flex gap-4 mb-4">
              <label className="font-semibold">
                Status:
                <select
                  onChange={(e) => setNewState(Number(e.target.value))}
                  className={`ml-2 cursor-pointer font-light border rounded  px-2 py-1 ${newState == 1 ? 'text-green-500' : 'text-red-500'}`}
                  value={newState}
                >
                  <option className="text-green-500" value={1}>Actief</option>
                  <option className="text-red-500" value={0}>Inactief</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col ">
              <p className="text-sm text-gray-500">Laatst bijgewerkt op: {date}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={async () => {
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
              }}
              >
                Opslaan
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
    
    
    
  );
}