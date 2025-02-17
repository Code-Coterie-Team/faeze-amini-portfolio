import WorkExperience from "./workExperience";
import Skills from "./skills";
import MyWork from "./myWork";
import ContactMe from "./contactMe";
import PersonalInformation from "./personalInformation";

function AboutMe() {
  return (
    <div className="px-12 flex flex-col gap-80 h-full overflow-y-auto">
      <PersonalInformation />
      <WorkExperience />
      <Skills />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default AboutMe;
