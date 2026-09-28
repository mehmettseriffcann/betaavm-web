import HeroSlider from "./components/HeroSlider";
import ContactBar from "./components/ContactBar";
import Features from "./components/Features";
import FounderSection from "./components/FounderSection";
import ServicesGrid from "./components/ServicesGrid";
import TabsSection from "./components/TabsSection";
import VideoCTA from "./components/VideoCTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ContactBar />
      <Features />
      <FounderSection />
      <section className="bg-gray-50 py-16">
        <ServicesGrid />
      </section>
      <TabsSection />
      <VideoCTA />
    </>
  );
}
