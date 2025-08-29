import type { FC } from "react";
import { useNavigate } from "react-router";

interface LocationCardProps {
    id: string;
    title: string;
    location: string;
    image: string;
    icon: string;
    cat: string;
}

const LocationCard: FC<LocationCardProps> = ({ id, title, location, image, icon, cat }) => {
    const navigate = useNavigate();

  return (
    <div className="max-w-[500px] justify-self-center mb-8">
        <div className="image w-full mb-3">
            <img src={image} alt={title} className="w-full" />
        </div>
        <div className="body flex items-center gap-2">
            <div className="w-15">
                <img src={icon} alt={cat} className="w-13 h-13" />
            </div>

            <div className="w-full border-s border-dashed px-2">
                <div className="border-b border-dashed pb-1">
                    <h3 className="text-xl text-gray-500">{title}</h3>
                </div>
                <div className="flex items-center justify-between pt-1">
                    <p className="text-gray-500 italic">{location}</p>
                    <button 
                        onClick={() => navigate(`/more-info/${id}`)}
                        className="bg-[#75667a] text-gray-200 px-8 cursor-pointer"
                    >
                        More Info
                    </button>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default LocationCard
