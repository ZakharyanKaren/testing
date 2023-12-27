import { FC } from "react";

import Image from "@/shared/components/Image/Image";

const clampStyle: any = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  whiteSpace: "normal"
};

interface ICardProps {
  title: string;
  desc: string;
  className?: string;
  w?: string;
}

const Card: FC<ICardProps> = ({ title, desc, className, w }) => (
  <div className={className}>
    <div className={`rounded-[10px] ${w}`}>
      <Image
        src='/latest/exhibitionsEvents/power_of_moodboards.png'
        width={605}
        height={586}
        alt='Power of Moodboards'
        className='w-full rounded-[10px]'
      />
    </div>
    <div className={`${w}`}>
      <p className='mt-3 text-bodyxs md:text-bodys'>{title}</p>
      <p className='mt-1 text-mbodyxs md:text-bodyxs' style={clampStyle}>
        {desc}
      </p>
    </div>
  </div>
);

export default Card;
