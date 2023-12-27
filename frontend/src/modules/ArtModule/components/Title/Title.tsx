import { FC } from "react";

import { awesomeSerif } from "@/shared/fonts/fonts";

interface ITitleProps {
  title1: string;
  title2: string;
  titleClassName?: string;
}

const Title: FC<ITitleProps> = ({ title1, title2, titleClassName }) => (
  <h1
    className={`${awesomeSerif.className} flex leading-[54px] sm:leading-16 md:leading-20 lg:leading-22 xl:leading-[108px] text-[46px] sm:text-[58px] md:text-[74px] lg:text-[88px] xl:text-[100px] tracking-[1.38px] lg:tracking-[3px] ${titleClassName}`}
  >
    <span className='font-normal'>{title1}</span>
    <span className='font-[500] italic'>{title2}</span>
  </h1>
);

export default Title;
