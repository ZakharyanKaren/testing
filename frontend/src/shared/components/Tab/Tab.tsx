"use client";

import { FC } from "react";
import clsx from "clsx";

interface ITabProps {
  title: string;
  isActive: boolean;
  disabled?: boolean;
  className?: string;
  bordered?: boolean;
  onClick: () => void;
}

const Tab: FC<ITabProps> = ({ title, isActive, onClick, className = "", disabled = false, bordered = false }) => (
  <button
    type='button'
    onClick={onClick}
    disabled={disabled}
    className={clsx(`transition-all duration-200 ease-in-out`, {
      "border border-solid rounded-32 px-[30px] py-3 text-bodys": bordered,
      "border-black text-black": bordered && disabled,
      "text-grey-500 border-grey-500 hover:border-grey-800 hover:text-grey-800 active:bg-black active:text-white":
        bordered && !disabled,
      "text-bodyxs": !bordered,
      "text-grey": !bordered && disabled,
      "md:py-[10px]": !bordered && !disabled,
      "text-grey hover:text-grey-800 active:text-black": !bordered && !disabled && !isActive,
      "bg-black text-white": isActive,
      [className]: className
    })}
  >
    {title}
  </button>
);

export default Tab;
