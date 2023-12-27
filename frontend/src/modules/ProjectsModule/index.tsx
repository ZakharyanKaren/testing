import ProjectsTabs from "./components/ProjectsTabs/ProjectsTabs";

import projects from "@/shared/constants/projects/data";
import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";
import ProjectContainer from "@/modules/ProjectsModule/containers/ProjectContainer/ProjectContainer";

function ProjectsModule() {
  return (
    <ModuleLayout title1='get inspired from' title2='our projects' titleClassName='text-right'>
      <ProjectsTabs />
      <ProjectContainer projectsFilter={projects} />
    </ModuleLayout>
  );
}
export default ProjectsModule;
