"use client";
import {Button} from "@material-tailwind/react"
import Gallery from "./gallery";
import Image1 from "../assets/auntyozy.png";
import Image2 from "../assets/beautyofchiri.png";
import Image3 from "../assets/medicalplus.png";
import Image4 from "../assets/netocodes.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
      alt: "Neto Codes",
      link: "https://netochukwucodes.vercel.app",
      title: "Neto Codes",
      description:
        "My personal Portfolio, built to make you guys know that i know my stuff, this was made with the best react framework 'NEXT js', which books appointments for my buisness without delay.",
    },
    {
      id: 4,
      src: Image1.src,
      alt: "Aunty Ozy Foodies",
      link: "https://auntyozyfoodies.vercel.app",
      title: "Aunty Ozy Foodies",
      description:
        "At the side i also co-own a resturant, our dishes are sweet and we do prepare everything there just make an order and we will have it delivered.",
    }
  ];
 
  return (
    <div className="w-full lg:w-7/12 px-8 mx-auto ">
      <h3 className="text-2xl font-semibold tracking-wider text-gray-700 dark:text-gray-100">Projects</h3>
      <Gallery data={data}/>
      <Link href={"/projects"} className="w-full flex justify-center items-center mt-3">
        <Button 
        className="flex gap-2 items-center text-md capitalize  bg-[#b9bac8d4] text-gray-700 hover:bg-[#1013d7] hover:text-gray-200 rounded-full px-5  py-2 mt-4 hover:dark:bg-cyan-300 dark:text-black "
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Show more <ArrowRight />
        </Button>
      </Link >
    </div>
  );
};

export default Projects;
