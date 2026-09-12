import { Hero } from "@/components/home/Hero";
import { PromiseStrip } from "@/components/home/PromiseStrip";
import { WhyForever } from "@/components/home/WhyForever";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { Bestsellers } from "@/components/home/Bestsellers";
import { BuilderTeaser } from "@/components/home/BuilderTeaser";
import { ReelsSection } from "@/components/home/ReelsSection";
import { Occasions } from "@/components/home/Occasions";
import { BulkCta } from "@/components/home/BulkCta";
import { HowToOrder } from "@/components/home/HowToOrder";
import { Testimonials } from "@/components/home/Testimonials";
import { MeetMaker } from "@/components/home/MeetMaker";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromiseStrip />
      <WhyForever />
      <CategoryShowcase />
      <Bestsellers />
      <BuilderTeaser />
      <ReelsSection />
      <Occasions />
      <BulkCta />
      <HowToOrder />
      <Testimonials />
      <MeetMaker />
      <InstagramGrid />
      <FaqSection />
      <FinalCta />
    </>
  );
}
