import ContactSection from "@/src/sections/Contact";
import EducationContainer from "@/src/sections/Education";
import ExperienceSection from "@/src/sections/Experience";
import AboutSection from "@/src/sections/About";
import ProjectsSection from "@/src/sections/Projects";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <EducationContainer />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
