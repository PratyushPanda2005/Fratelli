import Carousel from "./pages/Carousel";
import Hero from "./pages/Hero";
import Location from "./pages/Location";
import SecondDescription from "./pages/SecondDescription";
import Timeline from "./pages/Timeline";
import WineDescription from "./pages/WineDescription";
import WineSection from "./pages/WineSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Location/>
      <Carousel/>
      <WineSection/>
      <Timeline/>
      <WineDescription/>
      <SecondDescription/>
    </div>
  );
}
