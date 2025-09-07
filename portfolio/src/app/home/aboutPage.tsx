import Image from "next/image";
import { MoveDown, Origami } from "lucide-react";
import BounceCards from "@/blocks/Components/BounceCards/BounceCards";
import Masonry from "@/blocks/Components/Masonry/Masonry";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import MyImage from "../assets/netocodes_image.jpg";
import MyImage2 from "../assets/netocodes_image_2.jpg";
import SpotCards from "../components/spotCards";
import AboutDetails from "../components/aboutDetails";
import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import ElectricBorder from "@/blocks/Animations/ElectricBorder/ElectricBorder";
const AboutPage = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://www.react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://www.nextjs.org" },
    { node: <SiNodedotjs />, title: "Next.js", href: "https://www.nodejs.org" },
    { node: <SiPython />, title: "Next.js", href: "https://www.python.org" },
    {
      node: <SiPostgresql />,
      title: "Next.js",
      href: "https://www.postgresql.org",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const images = [
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QJnvahq_EBdUGjYQUYrhvA.png",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnWRFAsPUoNN3E7RtAaeczb__59sl8IwExoL0esvTHa2jxkNSw6JlmpHo72DrkfjTqstkXFznFUKIQ8lnu0VBou4Rhp_oaOATOj8puy4s",
    "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lJjAx8mVzA97aqrdXHTw8C3US_uMy6B2hA&s",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwoYhZKCPBlcUq2VLQ7E05orUbsAXxgv_HUGVi2zsPlfTbe2o4vEDYKyfmEvX5AmJKDFXx10xNAwKpJn4AIuBMyZm3ftaYz85z_vd2rg",
  ];
  const items = [
    {
      id: "1",
      img: MyImage.src,
      url: MyImage.src,
      height: 600,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 350,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: MyImage2.src,
      url: MyImage2.src,
      height: 600,
    },

    // ... more items
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  return (
    <div className="">
      <div className="  w-full mt-12 backdrop-blur-lg   lg:max-w-7/12 mx-auto px-6 lg:px-6 overflow-hidden">
        <div className="w-full py-4">
          <Image
            src={MyImage2}
            className="rounded-full shadow-2xl size-28 object-center object-cover  "
            alt="Profile Image"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold ">
          😉Hi, I&apos;m NetoCodes{" "}
        </h1>
        <p className="px-3 my-5  leading-relaxed tracking-wider text-lg">
          Experienced Full-Stack Web Developer specializing in Javascript,
          Typescript, expressJs, NodeJs, I use unique database like PostgresQl,
          MongoDB, MySQL. and frontend tools like React, Nextjs, Figma,
          Tailwindcss and alot more.
        </p>

        <p className="px-3 my-5 text-gray-700 leading-relaxed tracking-wider text-md italic dark:text-gray-300">
          &quot;When i&apos;m not working on your project there is a high chance
          that i&apos;m out playing Snooker🎱😎, If you do Play 8ball then we
          must talk buisness after a game of pool🎱&quot;
        </p>

        <div>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="relative w-full bg-blue-300 dark:bg-black/25 py-12 rounded-lg shadow-lg">
              <h3 className="text-3xl font-light  text-center py-3 px-4">
                These are some of the tech stacks i use
              </h3>
              <div className="absolute inset-0 flex items-center justify-center">
                <Origami className="w-24 h-24 text-blue-500 animate-pulse" />
              </div>
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={500}
                containerHeight={250}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            </div>
          </FadeContent>
        </div>
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
          className="mt-12"
        >
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>

        <div className="h-48  flex items-center justify-center">
          <ElectricBorder
            color="#1c953e"
            speed={1}
            chaos={1.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <MoveDown
              className="bg-blue-300/50 hover:bg-blue-500 dark:hover:bg-blue-300 py-2 size-11 rounded-full"
              size={37}
            />
          </ElectricBorder>
        </div>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div id="Portfolio" style={{ scrollMarginTop: "170px" }}>
            <AboutDetails />

            <SpotCards />
            {/*  To be continued
            <div className="my-8 text-lg leading-relaxed tracking-wider">
              <p>In my Fullstack Web-development journey i have learned:</p>
              <ul className="text-md text-gray-700 italic py-6 px-4 list-style flex flex-col gap-y-3 dark:text-gray-300">
                <li>
                  Nodejs and Express, <small>my go to for backend works</small>
                </li>
                <li>Pyhton for robust applications</li>
                <li>TypeScript for more robust JavaScript</li>
                <li>
                  React js for SPA <small>(Single Page Applications)</small>
                </li>
                <li>Next js for better Seo</li>
                <li>Tailwindcss, Bootstrap for Mordern css.</li>
              </ul>
              <small className="italic">
                {" "}
                and alot more..., so i won&quot;t bore you 😉
              </small>
            </div> */}

            <div className="py-4 h-dvh w-full max-h-96 overflow-y-auto">
              <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="random"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={true}
              />
            </div>
          </div>
        </FadeContent>
      </div>
    </div>
  );
};

export default AboutPage;
