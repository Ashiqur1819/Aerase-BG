import BgSlider from "../components/BgSlider";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

function Home() {
  return (
    <div>
      <Hero />
      <Steps />
      <BgSlider />
      <Testimonials />
      <Upload />
    </div>
  );
}

export default Home;
