import Cases from "./components/Cases";
import Places from "./components/Places";
import StudioService from "./components/StudioService";
import SkrewedImageGallery from "./components/SkewedImageGallery";
import StudioContentSection from "./components/StudioContentSection";
import VideoSection from "./components/VideoSection";
import LocationSection from "./components/LocationSection";
import ProcessTimeline from "./components/ProcessTimeline";
import Text from "./components/Text";
import Hero from "./components/Hero";
import PricingPlansSection from "./components/PricingPlansSection";
import Backstage from "./components/Backstage";
import plans from "@/app/data/Pricing.json"
import FaqAccordion from './components/FaqAccordion';
import HeroParallaxSection from './components/HeroParallaxSection';





export default function Home() {
  return (
    <>
    <Hero/>
      <Cases />
      <Places />
      <StudioService></StudioService>
      <SkrewedImageGallery></SkrewedImageGallery>
      <ProcessTimeline></ProcessTimeline>
      <StudioContentSection />
      <VideoSection></VideoSection>
      <LocationSection></LocationSection>
      <Text></Text>
      <PricingPlansSection plans={plans.plan1}/>
      <PricingPlansSection plans={plans.plan2}/>
      <Backstage></Backstage>
<FaqAccordion />
<HeroParallaxSection/>
    </>
  );
}
