import { useState, useEffect } from "react"
import { assets } from "../assets/assets";
import { titles } from "../data/appData";


const Hero = () => {
  const slides = [
    { id: 1, image: assets.hero1 },
    { id: 2, image: assets.hero2 },
    { id: 3, image: assets.hero3 },
  ]

  const [current, setCurrent] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 1000 * 30)
    return () => clearInterval(interval);
  }, [slides.length])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div 
            className="h-full flex items-center justify-center md:justify-start max-sm:px-10 md:ps-30 bg-black/40 text-white"
          >
            <h1 
              className="w-[20ch] text-2xl sm:text-4xl md:text-5xl max-md:text-center font-bold leading-15 md:leading-20 border-y py-2"
            >
              {titles.hero}
            </h1>
          </div>
        </div>
      ))}      
    </div>
  )
}

export default Hero
