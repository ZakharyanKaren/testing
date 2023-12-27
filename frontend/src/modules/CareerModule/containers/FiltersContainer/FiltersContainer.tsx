import { FC } from "react";

import Divider from "@/shared/components/Divider/Divider";
import Tab from "@/shared/components/Tab/Tab";
import FILTER_TABS from "@/shared/constants/career/data";

interface IFiltersContainerProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const FiltersContainer: FC<IFiltersContainerProps> = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (value: string) => () => {
    setActiveTab(value);
  };

  return (
    <div className='mt-6 sm-mt-8 md:mt-12 lg:mt-15'>
      <p className='max-w-[711px] text-mbodyxs md:text-bodyxs md:w-[80%] lg:w-[58%]'>
        We’re looking for passionate people to join us on our mission. We value flat hierarchies, clear communication,
        and full ownership and responsibility.
      </p>

      <div className='flex flex-wrap gap-x-[10px] md:gap-x-4 lg:gap-x-5 xl:gap-x-6 gap-y-6 mt-[14px] md:mt-6 lg:mt-8 xl:mt-9'>
        {FILTER_TABS.map(({ id, title, value }) => (
          <Tab key={id} title={title} isActive={value === activeTab} onClick={handleTabClick(value)} bordered />
        ))}
      </div>

      <Divider className='my-10 md:my-12 bg-black' />
    </div>
  );
};

export default FiltersContainer;
