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
            <div className="px-4 flex sm:flex-col sm:w-1/3 w-full gap-2 items-center max-w-[1440px] justify-start">
                <div className="text-primary pr-4 m-2">
                    <Star className="sm:w-[58px] sm:h-[58px] w-16 h-16" fill="currentColor" />
                </div>
                <div className="sm:flex sm:flex-col sm:justify-center">
                    <h2 className="sm:text-[1.5rem] text-[2rem] text-center font-bold">{sectionTitle}</h2>
                <p className="sm:text-center text-left sm:text-[1rem] text-[1.5rem]">{description}</p>
                </div>
            </div>
        </>
    );
}