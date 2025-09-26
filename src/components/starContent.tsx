import { Star } from "lucide-react";

interface starCardProps {
    sectionTitle: string;
    description: string;
}

export default function StarContent({
    sectionTitle,
    description,
}: starCardProps) {
    return (
        <>
            <div className="flex flex-col w-1/3 gap-2 items-center items-center max-w-[1440px] justify-start">
                <div className="text-primary p-4 m-2">
                    <Star size={58} fill="currentColor" />
                </div>
                <h2 className="text-[1.5rem] text-center font-bold">{sectionTitle}</h2>
                <p className="text-center text-[1rem]">{description}</p>
            </div>
        </>
    );
}