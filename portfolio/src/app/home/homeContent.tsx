
"use client";
import { useState, useEffect } from "react";
import Loading from "../loading";
import HeroSection from "./herosection";
import AboutPage from "./aboutPage";
import WorkExperience from "./workExperience";
import ContactUs from "./contact";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import Projects from "./projects";

export default function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-cyan-50 dark:bg-blue-950">
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <HeroSection />
      </FadeContent>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <AboutPage />
      </FadeContent>
      <div>
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <WorkExperience />
        </FadeContent>
      </div>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <Projects />
      </FadeContent>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <ContactUs />
      </FadeContent>
    </div>
  );
}