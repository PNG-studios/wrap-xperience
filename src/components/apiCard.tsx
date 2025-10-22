type ApiCardProps = {
  title: string;
  imageUrl: string;
  description: string;
  date: string;
};

export default function ApiCard({ title, imageUrl, description, date }: ApiCardProps) {
  return (
    <div className="border rounded-lg p-4 w-64 max-w-64 shadow-md flex  flex-col ">
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
        <p className="text-sm text-gray-500 mt-2">Aangemaakt op: {date}</p>
      </div>
    </div>
  );
}