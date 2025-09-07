import ElectricBorder from "@/blocks/Animations/ElectricBorder/ElectricBorder";
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import { Button } from "@material-tailwind/react";
import React from "react";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

type SpotCardsProps = {
  icon?: { id: string; el: React.ReactNode }[] | React.ReactNode;
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
};

const SpotCards = () => {
  const PHONE_NUMBER = "+2349134730499";
  const Frontend = "Netocodes, Hey i need you for a Frontend Work?";
  const backend = "Netocodes, Hey i need you for a Backend Work?";

  const cards: SpotCardsProps[] = [
    {
      icon: [
        { id: "react", el: <SiReact className="text-blue-400" size={27} /> },
        { id: "vue", el: <SiVuedotjs className="text-green-500" size={27} /> },
        { id: "ts", el: <SiTypescript className="text-blue-200" size={27} /> },
        {
          id: "tailwind",
          el: <SiTailwindcss className="text-blue-300" size={27} />,
        },
        { id: "redux", el: <SiRedux className="text-red-400" size={27} /> },
        { id: "pnpm", el: <SiPnpm className="text-red-600" size={27} /> },
        { id: "figma", el: <SiFigma className="text-purple-400" size={27} /> },
      ],
      title: "Frontend Tools",
      description:
        "A mixture a mordern frontend tools that scale well, with this i can charm your clients and deliver responsive & captivating designs.",
      link: `https://wa.me/${PHONE_NUMBER}?text=${Frontend}`,
      linkText: "Need a Frontend Dev?",
    },
    {
      icon: [
        {
          id: "node",
          el: <SiNodedotjs className="text-green-600" size={27} />,
        },
        {
          id: "express",
          el: <SiExpress className="text-yellow-400" size={27} />,
        },
        {
          id: "python",
          el: <SiPython className="text-yellow-400" size={27} />,
        },
        {
          id: "postgres",
          el: <SiPostgresql className="text-blue-800" size={27} />,
        },
        { id: "git", el: <SiGit className="text-orange-600" size={27} /> },
        { id: "docker", el: <SiDocker className="text-blue-500" size={27} /> },
      ],
      title: "Backend Tools",
      description:
        'Perfect Methodologies and tools to build a Secure, Scalable and "Fast" backend for your application. Handling payments, database, user authentication and more.',
      link: `https://wa.me/${PHONE_NUMBER}?text=${backend}`,
      linkText: "Need a Backend Dev?",
    },
    {
      icon: [
        { id: "git", el: <SiGit className="text-orange-600" size={27} /> },
        { id: "react", el: <SiReact className="text-blue-400" size={27} /> },
        {
          id: "node",
          el: <SiNodedotjs className="text-green-600" size={27} />,
        },
        {
          id: "express",
          el: <SiExpress className="text-yellow-400" size={27} />,
        },
        { id: "mongo", el: <SiMongodb className="text-green-700" size={27} /> },
        {
          id: "postgres",
          el: <SiPostgresql className="text-blue-800" size={27} />,
        },
        { id: "vercel", el: <SiVercel className="text-white" size={27} /> },
      ],
      title: "Freelance & Full-time",
      description:
        "Available for freelance projects and open to full-time roles. Let's discuss how I can contribute to your team or project.",
      link: "mailto:netochukwucodes@gmail.com",
      linkText: "Hire Me",
    },
    {
      icon: "🫂🤝",
      title: "Connect and Collaborate",
      description:
        "Let's connect on social media or professional networks to explore collaboration opportunities and share ideas.",
      link: "https://www.linkedin.com/in/netocodes",
      linkText: "Connect Now",
    },
  ];

  return (
    <div className=" relative grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-6 my-8">
      {cards.map((card, index) => {
        return (
          <div key={index}>
            <SpotlightCard
              className=" w-full h-72 flex flex-col bg-[rgb(255,255,255)] items-start gap-y-3"
              spotlightColor="rgba(0, 1.2, 225, 0.6)"
            >
              <i className="flex gap-x-2 ">
                {Array.isArray(card.icon)
                  ? card.icon.map((ic) => <span key={ic.id}>{ic.el}</span>)
                  : card.icon}
              </i>

              <h3 className="text-gray-300 font-bold text-md">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.description}
              </p>
              <div className="absolute bottom-5 md:bottom-8 right-8">
                <ElectricBorder
                  color="#1c953e"
                  speed={1}
                  chaos={1.5}
                  thickness={4}
                  style={{ borderRadius: 16 }}
                >
                  <a href={card.link}>
                    <Button
                      className="bg-[#1013d7] py-3 px-2 text-white cursor-pointer dark:text-black dark:bg-cyan-300"
                      size="md"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {card.linkText}
                    </Button>
                  </a>
                </ElectricBorder>
              </div>
            </SpotlightCard>
          </div>
        );
      })}
    </div>
  );
};

export default SpotCards;
