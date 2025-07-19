import Carousel from "./pages/Carousel";
import Hero from "./pages/Hero";
import Location from "./pages/Location";
import Timeline from "./pages/Timeline";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Location/>
      <Carousel/>
      <Timeline/>
    </div>
  );
}
