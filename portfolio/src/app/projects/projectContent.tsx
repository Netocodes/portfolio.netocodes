"use client";
import Aurora from '@/blocks/Backgrounds/Aurora/Aurora'
import MyWorks from './myworks'
import { useState, useEffect } from "react";
import Loading from '../loading';


const ProjectContent = () => {
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) {
        return <Loading />;
      }
  return (
       <div className=' bg-cyan-50 dark:bg-blue-950'>
    <div className=' w-full'>
    <Aurora
  colorStops={["#1013d7", "#FF94B4", "#53eafd"]}
  blend={0.96}
  amplitude={1.0}
  speed={0.5}
/>
    </div>
     <div className=' w-full max-w-3xl mx-auto  rounded-lg p-3'>
      <MyWorks />
    </div>
   </div>
  )
}

export default ProjectContent
