import WorkTimeline from "../components/timeline";
const WorkExperience = () => {
  const data = [
    {
      id: 1,
      title: "bochbeautyandskincare.shop",
      role: "Mern stack freelance developer",
      timeline: "December 2024 - Febuary 2025",
    },
    {
      id: 2,
      title: "auntyozyfoodies.vercel.app",
      role: "Front-End freelance developer",
      timeline: "February 2022 - April 2025",
    },
  
    
  ]
  return (
    <div>
         
     <section className="w-full mt-12 backdrop-blur-lg   lg:max-w-7/12 mx-auto px-9 lg:px-6 overflow-hidden">
 <WorkTimeline DataProps={data} />
     </section>
    </div>
  )
}

export default WorkExperience
