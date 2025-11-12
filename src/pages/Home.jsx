import Header from "../components/Header";
import HeroSection from "../components/HeroSection.jsx";
import SectionTitle from "../components/UI/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import AboutMeCard from "../components/AboutMeCard.jsx";
import FeaturedBlogs from "../components/UI/FeaturedBlogs.jsx";
import MiniContactSection from "../components/UI/MiniContactSection.jsx";
import Footer from "../components/Footer.jsx";
import proj1 from "../assets/ian-dooley-DuBNA1QMpPA-unsplash.jpg";
import proj2 from "../assets/jonatan-pie-3l3RwQdHRHg-unsplash.jpg";
import proj3 from "../assets/jonatan-pie-h8nxGssjQXs-unsplash.jpg";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SectionTitle title={"Projects"} />
      <ProjectCard src={proj1} alt={"Project 1"} />
      <ProjectCard src={proj2} alt={"Project 2"} />
      <ProjectCard src={proj3} alt={"Project 3"} />
      <SectionTitle title={"About me"} />
      <AboutMeCard />
      <SectionTitle title={"Blogs"} />
      <FeaturedBlogs />
      <MiniContactSection />
      <Footer />
    </div>
  );
}
