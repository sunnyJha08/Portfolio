import HeroSection from "../components/heroSection";
import Card from "../components/ui/projectCard";
import InfiniteLogosCarousel from "../components/ui/infiniteLogosCarousel";
import SectionTitle from "../components/ui/sectionTitle";
export default function Home() {
  return (
    <div className="mx-auto flex h-auto max-w-7xl flex-col gap-6 p-2">
      <HeroSection />
      <InfiniteLogosCarousel />
      <SectionTitle text={"Projects"} />

      <Card />
      <SectionTitle text={"Blogs"} />
    </div>
  );
}
