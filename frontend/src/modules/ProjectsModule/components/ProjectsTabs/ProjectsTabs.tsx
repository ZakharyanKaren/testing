"use client";

import { projectsNavigation } from "@/shared/constants/data";
import Tab from "@/shared/components/Tab/Tab";

function ProjectsTabs() {
  const handleClick = () => {
    console.warn("clicked");
  };

  return (
    <div className='my-6 sm:mt-9 md:mt-12 xl:mt-15 md:mb-[30px]'>
      <div className='hidden lg:flex justify-between'>
        {projectsNavigation.map(({ id, title, isActive }) => (
          <Tab key={id} title={title} isActive={isActive} onClick={handleClick} />
        ))}
      </div>

      {/* CONTINUE FROM HERE */}

      {/* <div>
            <select className="flex lg:hidden">
              {projectsNavigation.map(({ title, path }, index) => (
                <option key={index} className="text-grey">
                  {title}
                </option>
              ))}
            </select>
          </div> */}
    </div>
  );
}

export default ProjectsTabs;
