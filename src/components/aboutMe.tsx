import HeaderMain from "./headerMain";
import WorkExperience from "./workExperience";
import Skills from "./skills";
import MyWork from "./myWork";
import ContactMe from "./contactMe";
import PersonalInformation from "./personalInformation";


function AboutMe() {
  return (
    <div className="h-full overflow-hidden">
      <HeaderMain />
      <div className="px-12 flex flex-col gap-80 h-full overflow-y-auto">
        <PersonalInformation />
        <WorkExperience />
        <Skills />
        <MyWork />
        <ContactMe />
      </div>
    </div>
  );
}

export default AboutMe;
