import HeroSection from "./home/herosection";
import AboutPage from "./home/aboutPage";
import WorkExperience from "./home/workExperience";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
export default function Home() {
  return (
    <div>
      <div className=" bg-cyan-50 dark:bg-blue-950">
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
       <HeroSection />
</FadeContent>
       <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
       <AboutPage />
</FadeContent>
       
       <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
       <WorkExperience />
</FadeContent>
    </div>
    </div>
  );
}
