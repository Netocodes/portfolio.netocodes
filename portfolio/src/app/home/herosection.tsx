"use client"

import Particles from "@/blocks/Backgrounds/Particles/Particles";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
 
  return (
    <div className="grad-dark  h-[90dvh] lg:h-dvh  relative flex flex-col gap-y-8 items-center justify-center ">
 <div className="absolute w-full h-full  left-1/2 -translate-x-1/2  overflow-hidden">
 <Particles
    particleColors={['#c728eb', '#28a0eb', '#342bd6']}
    particleCount={400}
    particleSpread={20}
    speed={0.3}
    particleBaseSize={300}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
 </div>

<div className="flex flex-col gap-y-12 px-4">
<div className=" flex flex-col lg:flex-row gap-4 items-center">
  <h1 className="text-gray-800 dark:text-gray-300">I am Netochukwu and i build:</h1>
<RotatingText
texts={[
  'Online Store websites',  
  'Company Site websites',  
  'Booking Portal websites',  
  'Blog Platform websites',  
  'School websites',  
  'Health Portal websites',  
  'Event Hub websites',  
  'News Platform websites',  
  'Job Board websites',  
]}
  mainClassName="px-2 sm:px-2 text-3xl md:px-3 dark:bg-cyan-300 bg-blue-800 text-white  dark:text-black overflow-hidden py-3 lg:py-3 justify-center rounded-lg"
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
      <div className=" md:mt-8 flex flex-row items-center justify-center gap-y-5">





     


       <div className=" flex flex-col items-center justify-center gap-y-8  lg:gap-y-5">
       <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          Discover my projects, skills, and experiences.
        </p>
        <div className="flex gap-x-4">
          <Button className="bg-[#1013d7] text-white cursor-pointer dark:text-black dark:bg-cyan-300" size="lg">
            View Projects
          </Button>
          <Button className="bg-[#1013d7] text-white cursor-pointer dark:text-black dark:bg-cyan-300" size="lg">
            Contact Me
          </Button>
        </div>
       </div>
      </div>
</div>
    </div>
  )
}

export default HeroSection
