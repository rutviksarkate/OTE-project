import CapabilityGrid from "@/components/home/CapabilityGrid";
import CompanyIntro from "@/components/home/CompanyIntro";
import ContactBand from "@/components/home/ContactBand";
import Excellence from "@/components/home/Excellence";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import IndustryShowcase from "@/components/home/IndustryShowcase";
import PresentationBand from "@/components/home/PresentationBand";
import StatBand from "@/components/home/StatBand";
import { buildMeta } from "@/lib/metadata";

export const metadata = buildMeta({
  title: "Engineering and Project Execution",
  description:
    "OTE Projects provides multidisciplinary engineering, project management, procurement support and construction management for offshore facilities, refinery modifications and energy infrastructure. Headquarters in Ras Al Khaimah.",
  path: "/",
  image: "/images/company/bg-25.jpg",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <CapabilityGrid />
      <IndustryShowcase />
      <StatBand />
      <FeaturedProjects />
      <Excellence />
      <PresentationBand />
      <ContactBand />
    </>
  );
}
