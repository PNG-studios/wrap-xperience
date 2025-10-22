import { use, useState } from "react";

type ApiCardProps = {
  title: string;
  imageUrl: string;
  description: string;
  date: string;
};

export default function ApiCard({ title, imageUrl, description, date }: ApiCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div 
      className="border rounded-lg p-4 w-64 max-w-64 shadow-md flex  flex-col hover:cursor-pointer hover:scale-105 transition-transform hover:bg-gray-100" 
    onClick={() => setIsOpen(true)}
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
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-7 max-w-xl shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // voorkomt dat klik op modal de overlay sluit
          >
            <button
              className="absolute top-1 right-2 text-gray-500 font-extrabold hover:text-gray-800 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-64 object-cover mb-4 rounded" />}
            <input defaultValue={title} className="w-full placeholder-black  hover:text-gray-500 hover:placeholder:text-gray-500 hover:cursor-pointer text-2xl font-bold mb-4 outline-none"/>
            {/* <h2 className="text-2xl font-bold mb-2">{title}</h2> */}
            <textarea
              defaultValue={description}
              className="w-full placeholder-black hover:placeholder:text-gray-500 hover:cursor-pointer text-black hover:outline-solid rounded mb-4 outline-none h-25"
            />
            {/* <input placeholder={description} className=" w-full placeholder-black hover:placeholder:text-gray-500 hover:cursor-pointer text-gray-700 mb-4 outline-none over"/> */}
            {/* <p className="text-gray-700 mb-4">{description}</p> */}
            <p className="text-sm text-gray-500">Bijgewerkt op: {date}</p>
          </div>
        </div>
      )}
    </>
    
    
    
  );
}