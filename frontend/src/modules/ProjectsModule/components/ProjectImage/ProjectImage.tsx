import { FC } from "react";

import Image from "@/shared/components/Image/Image";
import { IImages } from "@/shared/types";

interface IImageProps {
  imageProps: IImages;
}

const ProjectImage: FC<IImageProps> = ({ imageProps }) => {
  const { image, title, subtitle, className } = imageProps;

  return (
    <div className={className}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        className='w-full rounded-[10px]'
      />
      <div className='text-black text-mbodyxs font-medium uppercase mt-3 xl:mt-6'>
        <p>{title}</p>
        {subtitle && <p className='mt-1'>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ProjectImage;
