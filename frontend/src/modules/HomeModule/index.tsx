import { useMemo } from "react";

import Button from "@/shared/components/Button/Button";
import { awesomeSerif } from "@/shared/fonts/fonts";
import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";

import HomeAnimation from "./components/HomeAnimation/HomeAnimation";
import PartnersSlider from "./components/PartnersSlider/PartnersSlider";
import Slider from "./components/Slider/Slider";

function HomeModule() {
  const header = useMemo(
    () => (
      <>
        <HomeAnimation />
        <PartnersSlider />
      </>
    ),
    []
  );

  return (
    <ModuleLayout
      className='-mt-14 lg:-mt-19'
      title1='transforming spaces'
      title2='inspiring minds'
      titleClassName='text-right mb-8'
      home
      header={header}
    >
      <Button
        text='View All Work'
        className='ml-auto mb-30 py-3 lg:py-4 pl-6 lg:pl-[30px] pr-4 text-[16px] lg:text-[18px] leading-6 lg:leading-[26px]'
        withArrow
      />

      <Slider />

      {/* About text */}
      <div className='bg-black text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-20 sm:pb-26 md:pb-32 lg:pb-36 xl:pb-44 -mx-4 sm:-mx-10 md:-mx-15 lg:-mx-20 xl:-mx-25 px-4 sm:px-10 md:px-15 lg:px-20 xl:px-25'>
        <div>
          <span
            className={`${awesomeSerif.className} lg:font-[300] text-[22px] md:text-xs lg:text-mml xl:text-s leading-[30px] tracking-[0.66px] sm:tracking-[0.9px] md:tracking-[1.1px] lg:tracking-[1.3px] xl:tracking-[1.5px]`}
          >
            Outer Image is a <em>New York</em> based Design and Build Studio specializing in The Physical Experience of
            a Brand. We are focused on the details, the details that make design come to life, the magic.We are driven
            by
            <span className='md:italic'>physical creation</span>. We create signage, art, and custom furniture for
            brands.
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-y-10 sm:gap-y-15 md:gap-y-20 lg:gap-y-25 xl:gap-y-30 pt-10 md:pt-12 lg:pt-14 xl:pt-15'>
        {/* 1 */}
        <h3
          className={`${awesomeSerif.className} text-right text-mxxl sm:text-m md:text-l lg:text-xl xl:text-xxl tracking-[1.8px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] xl:tracking-[6px]`}
        >
          what we <em>do</em>
        </h3>

        {/* 2 */}
        <div className='flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-12 lg:gap-y-16 xl:gap-y-20'>
          <h3
            className={`${awesomeSerif.className} text-mxxl sm:text-m md:text-l lg:text-xl xl:text-xxl tracking-[1.8px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] xl:tracking-[6px]`}
          >
            design
          </h3>

          <div className='text-grey italic text-bodym md:text-mxs xl:text-xs trackling-[0.72px] sm:trackling-[0.9px] md:trackling-[1.1px] lg:trackling-[1.3px] xl:trackling-[1.5px]'>
            <p>creative development.technical drawings.</p>
            <p>materials consulting.3d modeling.</p>
            <p>
              concept rendering. <span className='md:hidden'>branding.</span>
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className='flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-12 lg:gap-y-16 xl:gap-y-20'>
          <h3
            className={`${awesomeSerif.className} text-right text-mxxl sm:text-m md:text-l lg:text-xl xl:text-xxl tracking-[1.8px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] xl:tracking-[6px]`}
          >
            signage & <br /> printing
          </h3>

          <div className='max-w-[94%] text-grey italic text-bodym md:text-mxs xl:text-xs trackling-[0.72px] sm:trackling-[0.9px] md:trackling-[1.1px] lg:trackling-[1.3px] xl:trackling-[1.5px]'>
            <p>vacuum formed casting.banners and flags.</p>
            <p>illuminated letters.vinyl graphics.</p>
            <p>blade signs.neon.awnings.</p>
          </div>
        </div>

        {/* 4 */}
        <div className='flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-12 lg:gap-y-16 xl:gap-y-20'>
          <h3
            className={`${awesomeSerif.className} text-mxxl sm:text-m md:text-l lg:text-xl xl:text-xxl tracking-[1.8px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] xl:tracking-[6px]`}
          >
            custom <br />
            fabrication
          </h3>

          <div className='max-w-[94%] md:max-w-full text-grey italic md:text-right text-bodym md:text-mxs xl:text-xs trackling-[0.72px] sm:trackling-[0.9px] md:trackling-[1.1px] lg:trackling-[1.3px] xl:trackling-[1.5px]'>
            <p>carpentry and welding.painting and finshing.</p>
            <p>cnc routing.sculpting.murals.av integration.</p>
            <p>custom fabrication.metal. fabrication.</p>
          </div>
        </div>

        {/* 5 */}
        <div className='flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-15 lg:gap-y-18 xl:gap-y-20'>
          <h3
            className={`${awesomeSerif.className} text-right text-mxxl sm:text-m md:text-l lg:text-xl xl:text-xxl tracking-[1.8px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] xl:tracking-[6px]`}
          >
            installation & <br /> logistics
          </h3>

          <div className='text-grey italic text-bodym md:text-mxs xl:text-xs trackling-[0.72px] sm:trackling-[0.9px] md:trackling-[1.1px] lg:trackling-[1.3px] xl:trackling-[1.5px]'>
            <p>event shipping.installation.</p>
            <p>permitting.storage.pickup.</p>
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}

export default HomeModule;
