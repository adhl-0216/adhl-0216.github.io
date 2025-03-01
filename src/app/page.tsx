import ContactContainer from "@/src/containers/Contact";
import EducationContainer from "@/src/containers/Education";
import ExperienceContainer from "@/src/containers/Experience";
import IntroContainer from "@/src/containers/Intro";
import ProjectsContainer from "@/src/containers/Projects";

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
