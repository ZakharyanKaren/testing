import { FC } from "react";

import { IProject } from "@/shared/types";
import ProjectImage from "@/modules/ProjectsModule/components/ProjectImage/ProjectImage";

interface IProjectContainerProps {
  projectsFilter: IProject[];
}

const ProjectContainer: FC<IProjectContainerProps> = ({ projectsFilter }) => (
  <div>
    <div className='flex flex-col gap-y-6 xl:gap-y-[30px]'>
      {projectsFilter.map(({ id, className, images }) => (
        <div key={id} className={`flex md:justify-between gap-y-6 w-full ${className}`}>
          {images.map(imageProps =>
            imageProps.secondImage ? (
              <div key={imageProps.id} className={imageProps.wrapperClassName}>
                <ProjectImage imageProps={imageProps} />
                <ProjectImage imageProps={imageProps.secondImage} />
              </div>
            ) : (
              <ProjectImage key={imageProps.id} imageProps={imageProps} />
            )
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectContainer;
