import { states } from "../data/appData"

const States = () => {
  return (
    <div className="w-full bg-purple-100 py-8 flex items-center justify-center gap-5 sm:gap-10 md:gap-20">
      {states.map(({ icon, text }) => (
        <div key={text} className="flex flex-col gap-3 items-center cursor-pointer">
          <img src={icon} alt={text} className="w-20 h-20" />
          <span className="text-lg text-gray-500 font-medium">{text}</span>
        </div>
      ))}
    </div>
  )
}

export default States
