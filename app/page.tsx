import ContactContainer from "@/containers/Contact";
import EducationContainer from "@/containers/Education";
import ExperienceContainer from "@/containers/Experience";
import IntroContainer from "@/containers/Intro";
import ProjectsContainer from "@/containers/Projects";

function Home() {
  return (
    <>
      <IntroContainer />
      <ExperienceContainer />
      <EducationContainer />
      <ProjectsContainer />
      <ContactContainer />
    </>
  );
}

export default Home
