import Image from "next/image"
import {Origami} from "lucide-react"
import BounceCards from "@/blocks/Components/BounceCards/BounceCards";
const AboutPage = () => {
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
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
      <section className="w-full mt-12 backdrop-blur-lg   lg:max-w-7/12 mx-auto px-6 overflow-hidden">
        <div className="w-full py-4">
            <Image src={"https://muhaiminshihab.github.io/assets/images/author_1.jpg"} className="rounded-full shadow-2xl size-28 object-center object-cover  " alt="Profile Image"  width={100} height={100}/>
        </div>
        <h1 className="text-4xl font-extrabold text-gray0700">😉Hi, I&apos;m NetoCodes </h1>
        <p className="px-3 my-3 text-lg">Experienced Software Developer specializing in PHP, Laravel, JavaScript, Vue.js, Next.js, MySQL, and more. I love to explore new tools and technologies.</p>
    <div>
    <div className="relative w-full bg-black/25 py-12 rounded-lg shadow-lg">
    <h3 className="text-3xl font-thin  text-center py-3">These are some of the tech stacks i use</h3>
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

      
      </section>
    </div>
  )
}

export default AboutPage
