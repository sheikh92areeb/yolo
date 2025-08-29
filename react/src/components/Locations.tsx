import { locations } from "../data/locations"
import LocationCard from "./LocationCard"

const Locations = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-2">
          {locations.map(({ id, title, location, image, category }) => (
            <LocationCard
              key={id}
              id={id}
              title={title}
              location={location}
              image={image}
              icon={category.icon}
              cat={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Locations
