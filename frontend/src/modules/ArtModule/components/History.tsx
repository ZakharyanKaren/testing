import { FC } from "react";

import Image from "@/shared/components/Image/Image";
import { awesomeSerif } from "@/shared/fonts/fonts";
import Title from "@/modules/ArtModule/components/Title/Title";

interface IHistoryProps {
  title: string | string[];
  titleClassName: string;
  images: {
    src: string;
    alt: string;
  }[];
  descriptions: string[];
}

const History: FC<IHistoryProps> = ({ title, images, descriptions, titleClassName }) => {
  if (images.length === 0) {
    return <Title title1={title[0]} title2={title[1]} titleClassName={titleClassName} />;
  }

  return (
    <div>
      <div className='flex justify-center gap-x-4 md:gap-x-6 xl:gap-x-8'>
        <Image src={images[0].src} width={163} height={163} alt={images[0].alt} className='w-full max-w-[287px]' />
        <Image src={images[1].src} width={163} height={163} alt={images[1].alt} className='w-full max-w-[287px]' />
      </div>
      <h3
        className={`${awesomeSerif.className} flex justify-start sm:justify-center max-w-[55%] sm:max-w-full text-mm sm:text-mml md:text-s lg:text-mxxl xl:text-m mt-10`}
      >
        <span>{title}</span>
      </h3>
      <div className='mt-4 sm:mt-6 md:mt-10 lg:mt-12 xl:mt-15 text-mbodyxs lg:text-bodyxs indent-6 mx-auto lg:w-[85%] max-w-[1028px]'>
        <p>{descriptions[0]}</p>
        <br />
        <p>{descriptions[1]}</p>
        {descriptions[2] && (
          <>
            <br />
            <p>{descriptions[2]}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default History;
