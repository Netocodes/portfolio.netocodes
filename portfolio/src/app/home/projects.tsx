import { SquareArrowOutUpRight } from 'lucide-react'
import Image1 from '../assets/auntyozy.png'
import Image2 from "../assets/beautyofchiri.png"
import Image from 'next/image'
type projectsProps = {
  id: number,
  src: string,
  alt: string,
  link: string,
  title: string
  description: string
}
const Projects = () => {
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
      src: Image1.src,
      alt: "Aunty Ozy Foodies",
      link:"https://auntyozyfoodies.vercel.app",
      title: "Aunty Ozy Foodies",
      description: "Interactive restaurant menu website: browse dishes, click to order via WhatsApp redirect.",
    },
   
   
  ]
  return (
    <div className='w-full lg:w-7/12 px-8 mx-auto'>
        <h3 className='text-lg font-semibold tracking-wider'>Projects</h3>
      <div className="  grid-cols-2 sm:grid md:grid-cols-2 gap-x-6 gap-y-4">

  {data.map((item) => (

      <div key={item.id} className="w-full mx-3 mt-6 flex flex-col self-start rounded-lg border bg-white dark:bg-blue-900 text-surface shadow-md dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 group">
        
  <section className="relative block">
    <Image
      width={1000}
      className="rounded-t-lg rounded-b-sm w-full"
      src={item.src}
      alt={item.alt}
    />
    <div className="absolute bottom-0 inset-0 bg-black/85 flex flex-col   items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg rounded-b-sm">
<a href={item.link} className='absolute top-0 right-0 p-4 '>
  <SquareArrowOutUpRight className='text-white hover:text-blue-500' size={20} />
</a>
 <div className="absolute bottom-0 p-4">
 <h5 className="mb-2 text-xl font-medium leading-tight" >{item.title}:</h5>
    <p className=" mb-4 ">
{item.description}
    </p>
 </div>
    </div>
  </section>
  
</div>
  ))}
  
</div></div>
  )
}

export default Projects
