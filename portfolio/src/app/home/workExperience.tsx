import WorkTimeline from "../components/timeline";
const WorkExperience = () => {
  const data = [
    {
      id: 1,
      title: "Netocodes.dev",
      role: "Mern stack freelance developer",
      timeline: "February 2022 - April 2025",
    },
    {
      id: 2,
      title: "Netocodes.dev",
      role: "Mern stack freelance developer",
      timeline: "February 2022 - April 2025",
    },
    {
      id: 3,
      title: "Netocodes.dev",
      role: "Mern stack freelance developer",
      timeline: "February 2022 - April 2025",
    },
    {
      id: 4,
      title: "Netocodes.dev",
      role: "Mern stack freelance developer",
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
