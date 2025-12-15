import Logo from "@/components/Logo";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Logo />

      <Hero />

      <SectionDivider number="01" />

      <FeaturesSection />

      <div className="relative">
        <div className="absolute -top-[108px] left-1/2 -translate-x-1/2 z-10">
          <SectionDivider number="02" />
        </div>

        <Footer />
      </div>
    </>
  );
}
