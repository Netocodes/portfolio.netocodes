"use client"
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import FallingText from "./fallingText";
// import SplitText from "./";
const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="h-[500px] flex items-center justify-center bg-blue-300 dark:bg-blue-950">
      <div className="flex flex-col items-center justify-center gap-y-5">
     

<SplitText
  text="Hello World!, My Name is Netochukwu Ronaldo"
  className="text-2xl font-semibold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>

        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
          Welcome to My Portfolio
        </h1>
        <FallingText />
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          Discover my projects, skills, and experiences.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
