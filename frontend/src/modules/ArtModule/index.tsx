import Title from "./components/Title/Title";
import History from "./components/History";

import Image from "@/shared/components/Image/Image";
import HISTORY_INFO from "@/shared/constants/latest/art/data";
import { awesomeSerif } from "@/shared/fonts/fonts";
import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";

export default function ArtModule() {
  return (
    <ModuleLayout title1='the anatomy' title2='of colour' titleClassName='text-center'>
      <div className='mt-6 md:mt-15'>
        <Image src='/svgs/art_colors.svg' width={1242} height={514} alt='colors' className='w-full' />

        <div className='flex flex-col gap-y-6 sm:gap-y-10 md:gap-y-15 lg:gap-y-20 xl:gap-y-25 mt-10 sm:mt-16 md:mt-24 lg:mt-30 xl:mt-[140px]'>
          <Title title1='traditional' title2='paints' titleClassName='justify-end gap-2 md:gap-5' />

          <p
            className={`${awesomeSerif.className} max-w-[907px] text-mxs lg:text-xs tracking-[0.78px] lg:tracking-[0.96px]`}
          >
            In its simplest form, paint is a liquid that is applied to a surface and converts to a solid film, It is
            most commonly used to protect or decorate an object and is composed of the colouring matter known as
            pigment, a vehicle to carry it, known as the medium or binder, and the diluent or solvent, added to make it
            flow. Traditionally, the word ‘paint’ means an oil-based medium, but the term is commonly extended to
            include other coatings, too, such as a water-based paint. This section details the composition and
            application of oil paint, distemper, limewash and milk paint in homes between 1650 and 1830.
          </p>
        </div>

        <div className='flex flex-col gap-10 sm:gap-y-15 md:gap-y-20 lg:gap-y-25 xl:gap-30 mt-10 sm:mt-15 md:mt-20 lg:mt-25 xl:mt-30'>
          {HISTORY_INFO.map(({ id, title, images, descriptions, titleClassName }) => (
            <History
              key={id}
              title={title}
              images={images}
              descriptions={descriptions}
              titleClassName={titleClassName}
            />
          ))}
        </div>
      </div>
    </ModuleLayout>
  );
}
