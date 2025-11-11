import Header from "../components/Header";
import HeroSection from "../components/HeroSection.jsx";
import SectionTitle from "../components/UI/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import AboutMeCard from "../components/AboutMeCard.jsx";
import FeaturedBlogs from "../components/UI/FeaturedBlogs.jsx";
import MiniContactSection from "../components/UI/MiniContactSection.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SectionTitle props={"Projects"} />
      <ProjectCard
        src={"src/assets/ian-dooley-DuBNA1QMpPA-unsplash.jpg"}
        alt={"Project 1"}
      />
      <ProjectCard
        src={"src/assets/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"}
        alt={"Project 2"}
      />
      <ProjectCard
        src={"src/assets/jonatan-pie-h8nxGssjQXs-unsplash.jpg"}
        alt={"Project 3"}
      />
      <SectionTitle props={"About me"} />
      <AboutMeCard />
      <SectionTitle props={"Blogs"} />
      <FeaturedBlogs />
      <MiniContactSection />
    </div>
  );
}
