import { FC } from "react";
import clsx from "clsx";

import { awesomeSerif } from "@/shared/fonts/fonts";

interface PageTitleProps {
  title1: string;
  title2: string;
  className?: string;
  home?: boolean;
}

const PageTitle: FC<PageTitleProps> = ({ title1, title2, className = "", home = false }) => (
  <h1
    className={clsx(
      `${awesomeSerif.className} text-center leading-14 sm:leading-16 md:leading-20 lg:leading-22 xl:leading-25`,
      {
        "text-[36px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[72px] leading-[normal] tracking-[1px] lg:tracking-[2.16px]":
          home,
        "text-ml sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[100px] leading-[56px] tracking-[1.44px] lg:tracking-[3px]":
          !home,
        [className]: className
      }
    )}
  >
    <span className='font-normal'>{title1}</span>
    <br />
    <span className='font-[500] italic'>{title2}</span>
  </h1>
);

export default PageTitle;
