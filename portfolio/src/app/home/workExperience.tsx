import WorkTimeline from "../components/timeline";

export type dataProps = {
  id: number;
  name: string;
  title: string;
  role: string;
  timeline: string;
  link: string;
};
const WorkExperience = () => {
  const data: dataProps[] = [
    {
      id: 1,
      name: "Zempaa Stores",
      title: "zempaa.com",
      role: "Full-time Frontend developer",
      timeline: "September 2025 - Present",
      link: "https://www.zempaa.com/",
    },
    {
      id: 2,
      name: "Aunty Ozy Foodies",
      title: "auntyozyfoodies.vercel.app",
      role: "Front-End freelance developer",
      link: "https://auntyozyfoodies.vercel.app",
      timeline: "February 2023 - April 2025",
    },
    {
      id: 3,
      name: "Beauty of Chiri",
      title: "bochbeautyandskincare.shop",
      role: "Mern stack freelance developer",
      link: "https://www.bochbeautyandskincare.shop",
      timeline: "December 2024 - January 2024",
    },
    {
      id: 4,
      name: "Medical Plus",
      title: "netocodes.github.io/medical-plus/",
      role: "Personal Project",
      link: "https://netocodes.github.io/medical-plus/blank.html",
      timeline: "February 2023 - April 2023",
    },
  ];
  return (
    <div>
      <section className="w-full mt-12 backdrop-blur-lg  lg:max-w-7/12 mx-auto px-9 lg:px-6 overflow-hidden">
        <WorkTimeline DataProps={data} />
      </section>
    </div>
  );
};

export default WorkExperience;
