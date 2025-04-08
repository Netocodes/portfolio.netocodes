import Image from "next/image"
import { MoveDown, Origami} from "lucide-react"
import BounceCards from "@/blocks/Components/BounceCards/BounceCards";
import Masonry from "../components/mansonry";
const AboutPage = () => {
  const images = [
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QJnvahq_EBdUGjYQUYrhvA.png",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnWRFAsPUoNN3E7RtAaeczb__59sl8IwExoL0esvTHa2jxkNSw6JlmpHo72DrkfjTqstkXFznFUKIQ8lnu0VBou4Rhp_oaOATOj8puy4s",
    "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",


    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lJjAx8mVzA97aqrdXHTw8C3US_uMy6B2hA&s",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwoYhZKCPBlcUq2VLQ7E05orUbsAXxgv_HUGVi2zsPlfTbe2o4vEDYKyfmEvX5AmJKDFXx10xNAwKpJn4AIuBMyZm3ftaYz85z_vd2rg",
    
  ];
  const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 100 },
    { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    // { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    // { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    // { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    // { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
  ];
  
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];
  return (
    <div className="">
      <section className="  w-full mt-12 backdrop-blur-lg   lg:max-w-7/12 mx-auto px-9 lg:px-6 overflow-hidden"
    >
        <div className="w-full py-4">
            <Image src={"https://muhaiminshihab.github.io/assets/images/author_1.jpg"} className="rounded-full shadow-2xl size-28 object-center object-cover  " alt="Profile Image"  width={100} height={100}/>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold ">😉Hi, I&apos;m NetoCodes </h1>
        <p className="px-3 my-5 text-justify leading-relaxed text-lg">Experienced Full-Stack Web Developer specializing in Javascript, Node Js, Typescript, Vue.js, Next.js, MySQL, MongoDb, and more. I love to explore new tools and technologies.</p>
        
    <div>
    <div className="relative w-full bg-blue-300 dark:bg-black/25 py-12 rounded-lg shadow-lg">
    <h3 className="text-3xl font-light  text-center py-3 px-4">These are some of the tech stacks i use</h3>
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
    </div>

      
      <div className="h-48  flex items-center justify-center">
        <MoveDown className="bg-blue-300/50 dark:bg-white/50 py-2 size-11 rounded-full"/>
      </div>
      <div>
        <h2 className="text-3xl py-3 text-gray-800 dark:text-gray-200">About me</h2>
        <p className="text-lg leading-relaxed text-justify">  
My name is Amaugo Netochukwu Ronaldo. I&apos;m a passionate web developer specializing in <i className="text-lg"> Node.js, JavaScript, TypeScript, React.js, Next.js, Vue.js, MySQL, MongoDB, and Tailwind CSS </i>. With over four years of experience, I’ve helped startups build strong online identities through clean, efficient code. I thrive on turning ideas into reality and am always eager to explore new technologies that push boundaries. Resourceful, driven, and committed—I’m here to solve problems and deliver results.  
</p>  
      <div className="py-4">
      <Masonry  data={data} />

      </div>
      </div>
      </section>
    </div>
  )
}

export default AboutPage
