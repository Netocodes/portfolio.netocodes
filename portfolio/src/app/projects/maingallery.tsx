import { projectsProps } from "../home/projects";
import Image1 from "../assets/auntyozy.png";
import Image2 from "../assets/beautyofchiri.png";
import Image3 from "../assets/medicalplus.png";
import Image4 from "../assets/netocodes.png";
import Image5 from "../assets/Loggo.png";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
const MainGallery = () => {
  const data: projectsProps[] = [
    {
      id: 1,
      src: Image2.src,
      alt: "Beauty of Chiri",
      link: "https://www.bochbeautyandskincare.shop/productPage",
      detatilDescription:
        "E-commerce platform built with React (Vite), TypeScript, and Node.js, enabling global skincare sales with manual payments and real-time currency conversion. Increased client’s sales by 45% while ensuring secure, scalable transactions.",
      techStack: ["React", "Vite", "TypeScript", "Node.js", "TailwindCss"],
      githubLink: "https://bochbeautyandskincare.vercel.app",
      liveLink: "https://bochbeautyandskincare.shop",
      title: "Beauty of chiri",
      description:
        "An ecormerce store for skincare products based it turkey and skippes worldwide.",
    },
    {
      id: 2,
      src: Image3.src,
      alt: "Medical Plus",
      link: "https://auntyozyfoodies.vercel.app",
      detatilDescription:
        "  A healthcare portal built with Vite, Tailwind CSS, and Firebase (for secure login/registration) that connects patients to nearby hospitals, features medical blogs, and hosts charity events while managing guest access effectively. Increased engagement by 30%.",
      title: "Medical Plus",
      githubLink: "https://github.com/Netocodes/medical-plus",
      liveLink: "https://netocodes.github.io/medical-plus/",
      description:
        " A healthcare portal built with Vite, Tailwind CSS, and Firebase (for secure login/registration) that connects patients to nearby hospitals, features medical blogs, and hosts charity events while managing guest access effectively. Increased engagement by 30%.",
      techStack: [
        "html",
        "tailwindCss",
        "JavaScript",
        "Vite",
        "Firebase",
        "git",
      ],
    },
    {
      id: 3,
      src: Image4.src,
      alt: "Neto Codes",
      link: "https://netochukwucodes.vercel.app",
      detatilDescription:
        "High-performance web solutions built for scale. Leveraged Next.js for optimized rendering, TypeScript for bulletproof logic, and Tailwind for pixel-perfect UI. You need results? I engineer them.",
      title: "NetoCodes",
      githubLink: "https://github.com/Netocodes/portfolio.netocodes/",
      liveLink: "https://netochukwucodes.vercel.app",
      techStack: ["Next.js", "git", "Vercel", "TypeScript", "TailwindCss"],
      description:
        "A personal portfolio website showcasing my skills and projects.",
    },
    {
      id: 4,
      src: Image1.src,
      alt: "Aunty Ozy Foodies",
      link: "https://auntyozyfoodies.vercel.app",
      detatilDescription:
        "A student-centric menu platform for Enugu campuses, enabling quick browsing with WhatsApp-order integration. Drove 60% more inquiries via WhatsApp orders after launch. Built with React and Tailwind CSS for seamless mobile access",
      title: "Aunty Ozy Foodies",
      githubLink: "https://github.com/Netocodes/Aunty-Ozy-Foodies/",
      liveLink: "https://auntyozyfoodies.vercel.app",
      techStack: ["Html", "css", "git", "vercel", "TailwindCss", "JavaScript"],
      description:
        "Interactive restaurant menu website: browse dishes, click to order via WhatsApp redirect.",
    },
    {
      id: 5,
      src: Image5.src,
      alt: "Loggo authentication demo",
      link: "#",
      detatilDescription:
        "I built loggo to stand out and answer alot of questions concerning Registration and Login to my clients, this way you can see how secure your web-app can be with fullstack powers 😉",
      title: "Loggo",
      githubLink: "https://github.com/Netocodes/Loggo/",
      liveLink: "#",
      techStack: [
        "React",
        "tailwindcss",
        "typescript",
        "expressjs",
        "postgresql",
        "git",
      ],
      description:
        "A simple Login and signup demo website to showcase how powerful yours can be when i work on yours",
    },
    // {
    //  id: 5,
    //  src: '',
    //  alt: '',
    //  link: '',
    //  detatilDescription: '',
    //  title: '',
    //  githubLink: '',
    //  liveLink: '',
    //  techStack: [''],
    //  description: '',
    // },
    // you are welcome 😉
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4">
        {data.map((item: projectsProps) => (
          <div
            key={item.id}
            className="relative  group border-2 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              className="w-full h-auto rounded-t-lg shadow-lg "
            />
            {/* Description */}
            <div className="px-3 ">
              <h2 className="text-2xl py-3 text-gray-800 dark:text-cyan-200 font-semibold mt-3">
                {item.title}
              </h2>
              <p className="text-md mt-4 text-gray-700 dark:text-gray-200">
                {item.detatilDescription}
              </p>
            </div>

            <div className="mt-6 px-3">
              <h3 className="text-lg font-semibold">Tech Stacks Used:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 text-center px-3 py-4 gap-4">
                {item.techStack &&
                  item.techStack.map((tech, index) => (
                    <span
                      className="outline p-2 hover:outline-none hover:bg-blue-500/50 hover:dark:bg-cyan-300/50 outline-blue-500 dark:outline-cyan-300 rounded-full transition ease-in-out duration-300 "
                      key={index}
                    >
                      <p className="text-xs">{tech}</p>
                    </span>
                  ))}
              </div>
            </div>
            {/* souce code */}
            <div className="flex items-center justify-center py-3 gap-x-4 mt-4">
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 bg-gray-900/50 text-white text-sm font-semibold rounded-lg px-4 py-2 hover:bg-gray-900/70 transition duration-300 ease-in-out"
              >
                <Github />
                Source Code
              </a>
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 bg-gray-900/50 text-white text-sm font-semibold rounded-lg px-4 py-2 hover:bg-gray-900/70 transition duration-300 ease-in-out"
              >
                <Globe />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGallery;
