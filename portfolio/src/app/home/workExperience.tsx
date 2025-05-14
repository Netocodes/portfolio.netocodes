import WorkTimeline from "../components/timeline";

export type dataProps = {
  id: number,
  title: string,
  role: string,
  timeline: string,
  link: string,

}
const WorkExperience = () => {
  const data: dataProps[] = [
    {
      id: 1,
      title: "bochbeautyandskincare.shop",
      role: "Mern stack freelance developer",
      link:"https://www.bochbeautyandskincare.shop",
      timeline: "December 2024 - May 2025",
    },
    {
      id: 2,
      title: "auntyozyfoodies.vercel.app",
      role: "Front-End freelance developer",
      link:"https://auntyozyfoodies.vercel.app",
      timeline: "February 2023 - April 2025",
    },
  
    
  ]
  return (
    <div>
         
     <section className="w-full mt-12 backdrop-blur-lg  lg:max-w-7/12 mx-auto px-9 lg:px-6 overflow-hidden">
 <WorkTimeline DataProps={data} />
     </section>
    </div>
  )
}

export default WorkExperience
