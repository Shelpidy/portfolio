import AboutMe, { OutlineDividerSVG } from "@/components/AboutSection";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/Projects";
import ResumeSection from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Banner />
      <main className="max-w-7xl mx-auto px-4 md:px-20">
        <AboutMe />
        <OutlineDividerSVG />
        <Skills />
        <OutlineDividerSVG />
        <ProjectsSection />
        <OutlineDividerSVG />
        <ResumeSection />
        <OutlineDividerSVG />
        <ContactSection />
      </main>
    </main>
  );
}
