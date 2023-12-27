import { Metadata } from "next";

import ProjectsModule from "@/modules/ProjectsModule";

export const metadata: Metadata = {
  title: "Projects Page",
  description: "Projects Page"
};

export default function Projects() {
  return <ProjectsModule />;
}
