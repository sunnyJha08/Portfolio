import HeroSection from "../components/heroSection";
import Card from "../components/ui/projectCard";

export default function Home() {
  return (
    <div className="mx-auto flex h-auto max-w-7xl flex-col gap-6 p-2">
      <HeroSection />
      <Card />
    </div>
  );
}
