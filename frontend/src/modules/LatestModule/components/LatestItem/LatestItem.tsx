import { FC } from "react";

import { ILatestData } from "@/modules/LatestModule/constants/data";
import Image from "@/shared/components/Image/Image";
import { awesomeSerif } from "@/shared/fonts/fonts";
import Link from "@/shared/components/Link/Link";

const LatestItem: FC<ILatestData> = ({
  link,
  title,
  image,
  image2,
  image3,
  number,
  titleClassName,
  wrapperClassName
}) => (
  <Link
    href={link}
    className={`relative flex justify-between rounded-[10px] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-[30px] h-full -start cursor-pointer overflow-hidden items-start ${wrapperClassName}`}
  >
    <div className={`text-xs text-[#0D4155] tracking-[0.96px] ${titleClassName}`}>
      {Array.isArray(title) ? title.map(word => <p key={word}>{word}</p>) : <p>{title}</p>}
    </div>

    <Image src={image.src} width={40} height={40} alt='arrow' className={image.className} />

    {image2 && (
      <Image
        src={image2.src}
        width={image2.width}
        height={image2.height}
        alt={image2.alt}
        className={image2.className}
      />
    )}

    {image3 && (
      <Image
        src={image3.src}
        width={image3.width}
        height={image3.height}
        alt={image3.alt}
        className={image3.className}
      />
    )}

    <p
      className={`${awesomeSerif.className} italic absolute right-4 md:right-8 -bottom-3 md:bottom-6 text-mxxl md:text-l lg:text-xl xl:text-xxl opacity-5`}
    >
      {number}
    </p>
  </Link>
);

export default LatestItem;
