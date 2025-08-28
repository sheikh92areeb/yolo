import type { FC } from "react";
import type { Info } from "../utils/interfaces";

const FeatureCard: FC<Info> = ({ image, title, tagline, desc }) => {
  return (
    <div className="w-[250px] flex flex-col items-center justify-self-center text-gray-500">
      <img src={image} alt="Card image" className="w-50 h-50 rounded-full mb-3 border-4 border-white" />
      <h2 className="text-2xl font-semibold mb-3">
        {title}
      </h2>
      <p className="border-b-2 border-b-gray-500 border-dashed pb-3 mb-3">
        {tagline}
      </p>
      <p className="text-sm text-center">
        {desc}
      </p>
    </div>
  )
}

export default FeatureCard
