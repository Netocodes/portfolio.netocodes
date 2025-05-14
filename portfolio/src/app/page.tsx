import HeroSection from "./home/herosection";
import AboutPage from "./home/aboutPage";
import WorkExperience from "./home/workExperience";
import ContactUs from "./home/contact";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import Projects from "./home/projects";

export default function Home() {
  return (
    <div>
    
      <div className=" bg-cyan-50 dark:bg-blue-950">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <HeroSection />
        </FadeContent>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          
        >
          <AboutPage  />
        </FadeContent>

        <div>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <WorkExperience />
          </FadeContent>
        </div>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <Projects />
        </FadeContent>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <ContactUs />
        </FadeContent>
      </div>
      
    </div>
  );
}
