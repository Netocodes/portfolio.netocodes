"use client"

import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";

// import SplitText from "./";
const HeroSection = () => {
 
  return (
    <div className="h-[500px] flex items-center justify-center bg-blue-300 dark:bg-blue-950">
      <div className="flex flex-col items-center justify-center gap-y-5">

     

<div className="flex flex-col lg:flex-row gap-4 items-center">
  <h1>Here at Netocodes We build</h1>
<RotatingText
  texts={['E-Cormerce Websites', 'Buisness Websites', 'Logistics Websites', 'Everything Website Related']}
  mainClassName="px-2 sm:px-2 text-3xl md:px-3 bg-cyan-300 dark:bg-blue-800 dark:text-white  text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={3000}
/>
</div>

        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          Discover my projects, skills, and experiences.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
