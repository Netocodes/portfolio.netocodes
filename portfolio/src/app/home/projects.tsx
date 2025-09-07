"use client";
import { Button } from "@material-tailwind/react";
import Gallery from "./gallery";
import Image1 from "../assets/auntyozy.png";
import Image2 from "../assets/beautyofchiri.png";
import Image3 from "../assets/medicalplus.png";
import Image4 from "../assets/Loggo.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ElectricBorder from "@/blocks/Animations/ElectricBorder/ElectricBorder";
export type projectsProps = {
  id: number;
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
  detatilDescription?: string;
  techStack?: string[];
  githubLink?: string;
  liveLink?: string;
};
const Projects = () => {
  const data: projectsProps[] = [
    {
      id: 1,
      src: Image2.src,
      alt: "Beauty of Chiri",
      link: "https://www.bochbeautyandskincare.shop/productPage",
      title: "Beauty of chiri",
      description:
        "A skincare website made for a trusted client in turkey, shippes worldwide, This Website reduced her customer service stress greatly, and gained better attraction online.",
    },
    {
      id: 2,
      src: Image3.src,
      alt: "Medical Plus",
      link: "https://netocodes.github.io/medical-plus/",
      title: "Personal project",
      description:
        "Medical plus was built with tailwindCss, html, javascript etc.. for design and firebase for Autentication, made to book meetings with avalable doctors and nurses in a mordern style",
    },
    {
      id: 3,
      src: Image4.src,
      alt: "Loggo",
      link: "https://netochukwucodes.vercel.app",
      title: "Loggo",
      description:
        "An authentication system frontend and backend included, implemented features like rate limiting, jwt auth, password hashing/bcrypt, enabling sure and monitored access.",
    },
    {
      id: 4,
      src: Image1.src,
      alt: "Aunty Ozy Foodies",
      link: "https://auntyozyfoodies.vercel.app",
      title: "Park & Chow",
      description:
        "At the side i also co-own a resturant, our dishes are sweet and we do prepare everything there just make an order and we will have it delivered.",
    },
  ];

  return (
    <div className="w-full lg:w-7/12 px-8 mx-auto ">
      <h3 className="text-2xl font-semibold tracking-wider text-gray-700 dark:text-gray-100">
        Projects
      </h3>
      <Gallery data={data} />
      <Link
        href={"/projects"}
        className="w-full flex justify-center items-center mt-3"
      >
        <ElectricBorder
          color="#1c953e"
          speed={1}
          chaos={1.5}
          thickness={4}
          style={{ borderRadius: 16 }}
        >
          <Button
            className="flex gap-2 items-center text-md capitalize bg-blue-500 hover:bg-[#1013d7] hover:text-white rounded-full px-5  py-2  hover:dark:bg-cyan-300 dark:text-white dark:hover:text-black "
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Show more <ArrowRight />
          </Button>
        </ElectricBorder>
      </Link>
    </div>
  );
};

export default Projects;
