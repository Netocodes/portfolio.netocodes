import HeroSection from "./home/herosection";
import AboutPage from "./home/aboutPage";
import Appointment from "./components/book-appointment";
export default function Home() {
  return (
    <div>
      <div className=" bg-cyan-50 dark:bg-blue-950">
<div className="bg-grad-light">
<HeroSection />
</div>      <AboutPage />
    <Appointment />

    </div>
    </div>
  );
}
