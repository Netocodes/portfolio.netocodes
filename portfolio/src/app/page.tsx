import HeroSection from "./home/herosection";
import AboutPage from "./home/aboutPage";
export default function Home() {
  return (
    <div className=" bg-cyan-50 dark:bg-blue-950">
      <HeroSection />
      <AboutPage />
    </div>
  );
}
