"use client"
import { SquareArrowOutUpRight } from 'lucide-react'
import Image1 from '../assets/auntyozy.png'
import Image2 from "../assets/beautyofchiri.png";
import Image3 from "../assets/medicalplus.png";
import Image4 from "../assets/netocodes.png";
import Image from 'next/image'
import { useState } from 'react';
type projectsProps = {
  id: number,
  src: string,
  alt: string,
  link: string,
  title: string
  description: string
}
const Projects = () => {
  const [clicked, setClicked] = useState<boolean>(false)
  const data: projectsProps[] = [
    
    {
      id: 1,
      src: Image2.src,
      alt: "Beauty of Chiri",
      link:"https://www.bochbeautyandskincare.shop/productPage",
      title: "Beauty of chiri",
      description: "An ecormerce store for skincare products based it turkey and skippes worldwide.",
    },
    {
      id: 2,
      src: Image3.src,
      alt: "Medical Plus",
      link:"https://auntyozyfoodies.vercel.app",
      title: "Personal project",
      description: "Medical plus was built with TailwindCss for design and firebase for Autentication",
    },
    {
      id: 3,
      src: Image4.src,
      alt: "Neto Codes",
      link:"https://netochukwucodes.vercel.app",
      title: "Neto Codes",
      description: "A personal portfolio website showcasing my skills and projects.",
    },
    {
      id: 4,
      src: Image1.src,
      alt: "Aunty Ozy Foodies",
      link:"https://auntyozyfoodies.vercel.app",
      title: "Aunty Ozy Foodies",
      description: "Interactive restaurant menu website: browse dishes, click to order via WhatsApp redirect.",
    },
    
   
   
  ]
 const activeTest = (id :number) => {
  setClicked(!clicked)
console.log(id)

 }
  return (
    <div className='w-full lg:w-7/12 px-8 mx-auto'>
        <h3 className='text-lg font-semibold tracking-wider'>Projects</h3>
      <div className="  grid-cols-2 sm:grid md:grid-cols-2 py-4 gap-x-6 gap-y-2">

  {data.map((item) => (

      <div  key={item.id} className="w-full mt-6 flex flex-col self-start rounded-lg border bg-white dark:bg-blue-900 text-surface shadow-md dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 group">
        <a href={item.link} target='_blank'></a>
  <section onClick={() => {
    activeTest(item.id)

  }} className="relative block">
    <Image
      width={1000}
      height={1000}
      className="rounded-t-lg rounded-b-sm w-full"
      src={item.src}
      alt={item.alt}
    />
    {/* copied text:     <button 
    class="peer" 
    aria-expanded="false"
  >
    Hover/Focus/Tap Me
  </button>
  
  <!-- Hidden content -->
  <div class="
    opacity-0
    group-hover:opacity-100
    peer-focus:opacity-100
    peer-active:opacity-100
    transition-opacity duration-300
  " */}

 <div className={`absolute bottom-0 z-50!  inset-0 bg-black/75 flex flex-col items-center justify-center text-white opacity-0
    group-hover:opacity-100
    peer-focus-visible:opacity-100
    peer-active:opacity-100
    transition-opacity duration-300  rounded-t-lg rounded-b-sm`}>
<a href={item.link} className='absolute top-0 right-0 p-4 '>
  <SquareArrowOutUpRight className='text-white hover:text-blue-500' size={20} />
</a>
 <div className="absolute bottom-0 p-4">
 <h5 className="mb-2 text-xl font-medium leading-tight" >{item.title}:</h5>
    <p className=" max-w-xl text-sm leading-relaxed mb-4 ">
{item.description}
    </p>
 </div>
    </div>
    <button 
    className="absolute top-5 peer" 
    aria-expanded="false"
  >
    Hover/Focus/Tap Me
  </button>
  </section>
  
</div>
  ))}
  
</div></div>
  )
}

export default Projects
