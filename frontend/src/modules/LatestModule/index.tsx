import { awesomeSerif } from "@/shared/fonts/fonts";
import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";
import data from "@/modules/LatestModule/constants/data";
import LatestItem from "@/modules/LatestModule/components/LatestItem/LatestItem";

function LatestModule() {
  return (
    <ModuleLayout title1='we are driven by' title2='physical creation' titleClassName='text-center'>
      <div className='hidden md:flex justify-between mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-15 items-end max-w-[630px] md:max-w-[540px] lg:max-w-[630px] xl:max-w-[700px] mx-auto'>
        <p className='max-w-[123px]'>get inspired by our moodboards</p>
        <p className='max-w-[154px]'>learn something new</p>
        <p className='max-w-[147px] text-right'>find what you want for your next project</p>
      </div>

      <div className='mt-6 md:mt-[30px]'>
        <div
          className={`${awesomeSerif.className} grid gap-3 md:gap-[30px] grid-cols-1 md:grid-cols-3 grid-rows-mobile md:grid-rows-desktop`}
        >
          {data.map(item => (
            <LatestItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </ModuleLayout>
  );
}

export default LatestModule;
