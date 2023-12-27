"use client";

import Button from "@/shared/components/Button/Button";
import Image from "@/shared/components/Image/Image";
import { awesomeSerif } from "@/shared/fonts/fonts";
import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";
import IMAGES from "@/shared/constants/latest/history/data";

function HistoryModule() {
  const handleClick = () => {
    console.warn("Share now");
  };

  return (
    <ModuleLayout title1='the power of' title2='moodboards'>
      <div className='flex flex-col gap-10 md:gap-20 xl:gap-30 mt-6 md:mt-15'>
        <div className='flex flex-col gap-10 md:gap-15 xl:gap-20'>
          <Image src='/svgs/colors.svg' width={1242} height={514} alt='colors' className='w-full' />
          <div className='w-full md:max-w-[82%] mx-auto text-center text-mbodyxs md:text-bodyxs'>
            <p>Are you searching for the perfect source of inspiration to fuel your next creative project?</p>
            <p className='inline md:block'>
              Look no further than Outer Image, where we&apos;ve harnessed the magic of moodboards to help our clients
              unlock their artistic potential.{" "}
            </p>
            <p className='inline md:block'>
              Moodboards are an essential tool in the world of design and creativity. They serve as a visual playground
              where ideas, concepts, and emotions come to life through a carefully curated collection of images, colors,
              textures, and typography. At Outer Image, we&apos;ve taken this concept to the next level, and we&apos;re
              excited to share the results with you on our Pinterest page.
            </p>
            <p />
          </div>
          <div>
            <h3
              className={`${awesomeSerif.className} text-center text-mm sm:text-mml md:text-s lg:text-mxxl xl:text-m`}
            >
              what are moodboards?
            </h3>
          </div>
          <div>
            <h3
              className={`${awesomeSerif.className} text-center text-mm sm:text-mml md:text-s lg:text-mxxl xl:text-m sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto`}
            >
              “Moodboards are a dynamic and versatile tool for creative professionals”.{" "}
              <span className='text-[#829C46]'>They help to</span>
            </h3>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 xl:gap-[30px]'>
            {IMAGES.map(({ id, src, alt }) => (
              <Image key={id} src={src} width={287} height={278} alt={alt} className='w-full rounded-[10px]' />
            ))}
          </div>
          <div className='text-grey text-center text-mbodyxs md:text-bodyxs max-w-[606px] mx-auto'>
            Explore our Pinterest page. Discover the beauty of moodboards, and let your imagination run wild. Whether
            you&apos;re a seasoned designer or someone just starting their creative adventure, we&apos;ve got something
            for everyone. <br />
            <br /> Stay tuned to our blog for more insights into the world of design, creativity, and innovation. Outer
            Image is not just a creative design agency we&apos;re your partner in turning ideas into reality. Together,
            we can paint the canvas of imagination and bring your visions to life.
          </div>
        </div>
        <div className='bg-[#3887A5] -mx-4 sm:-mx-10 md:-mx-15 lg:-mx-20 xl:-mx-25 px-4 sm:px-10 md:px-15 lg:px-20 xl:px-25 py-20 md:py-30 xl:py-40 leading-[30px] md:leading-[70px] tracking-[1.5px]'>
          <p className={`${awesomeSerif.className} text-white text-[22px] md:text-[50px]`}>
            Eclectic Enigma. Playful Planet. Naturals & Neons.{" "}
            <span className='whitespace-nowrap'>Elevated Metals.</span> Urban Concrete. Modern Metallics. Botanical
            Expressions. Sculpted History. Holo Spectrum. White on White. Timeless Monochromes. Industrial Echoes.
            Coastal Calm. Retro Return. Monochrome Lo-Fi. Retro Return.
          </p>
        </div>
        <div className='flex flex-col gap-6 md:gap-8 lg:gap-12 xl:gap-15'>
          <h1
            className={`${awesomeSerif.className} text-left leading-[56px] sm:leading-16 md:leading-20 lg:leading-22 xl:leading-25 text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] tracking-[1.08px] lg:tracking-[2.16px]`}
          >
            <span className='font-normal'>explore our</span>
            <br />
            <span className='font-[500] italic'>moodboards.</span>
          </h1>
          <div className='flex flex-wrap max-w-[577px] text-[#3887A5] gap-x-6 md:gap-x-10 lg:gap-x-14 gap-y-6 md:gap-y-9 xl:gap-y-12'>
            <div className='sm:max-w-[260px]'>
              <h3 className='text-bodyxs lg:text-bodys'>Spark Ideas</h3>
              <p className='mt-2 text-mbodyxs lg:text-bodyxs'>
                Moodboards are a wellspring of ideas, sparking creativity by juxtaposing disparate elements and drawing
                connections between them.
              </p>
            </div>
            <div className='sm:max-w-[260px]'>
              <h3 className='text-bodyxs lg:text-bodys'>Enhance Collaboration</h3>
              <p className='mt-2 text-mbodyxs lg:text-bodyxs'>
                In a team setting, moodboards facilitate collaboration by providing a visual reference that everyone can
                rally around.
              </p>
            </div>
            <div className='sm:max-w-[260px]'>
              <h3 className='text-bodyxs lg:text-bodys'>Define a Vision</h3>
              <p className='mt-2 text-mbodyxs lg:text-bodyxs'>
                Whether you&apos;re designing a website, planning an event, or working on a branding project, moodboards
                allow you to clearly articulate your vision and concept.
              </p>
            </div>
            <div className='sm:max-w-[260px]'>
              <h3 className='text-bodyxs lg:text-bodys'>Align with Clients</h3>
              <p className='mt-2 text-mbodyxs lg:text-bodyxs'>
                Moodboards are a bridge of understanding between you and your clients. They ensure everyone is on the
                same page when it comes to the project&apos;s visual direction.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 md:gap-8'>
          <h1
            className={`${awesomeSerif.className} text-right leading-[56px] sm:leading-16 md:leading-20 lg:leading-22 xl:leading-25 text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] tracking-[1.08px] lg:tracking-[2.16px]`}
          >
            <span className='font-normal'>create and share</span>
            <br />
            <span className='font-[500] italic'>your boards</span>
          </h1>

          <Button
            text='Share now'
            onClick={handleClick}
            withArrow
            className='ml-auto py-3 lg:py-4 pl-6 lg:pl-[30px] text-[16px] lg:text-[18px] leading-6 lg:leading-[26px]'
          />
        </div>
      </div>
    </ModuleLayout>
  );
}

export default HistoryModule;
