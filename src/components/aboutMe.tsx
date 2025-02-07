import HeaderMain from "./headerMain";
import WorkExperience from "./workExperience";
import Skills from "./skills";
import MyWork from "./myWork";
import ContactMe from "./contactMe";
import PersonalInformation from "./personalInformation";


function AboutMe() {
  return (
    <div className="overflow-hidden">
      <HeaderMain />
      <div className="px-12 flex flex-col gap-80 overflow-y-auto h-screen">
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
