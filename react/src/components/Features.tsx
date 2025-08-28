import { info } from "../data/appData"
import FeatureCard from "./FeatureCard"


const Features = () => {
  return (
    <div className="w-full bg-purple-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6">
          {info.map(({ image, title, tagline, desc }) => (
            <FeatureCard key={title} image={image} title={title} tagline={tagline} desc={desc} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
