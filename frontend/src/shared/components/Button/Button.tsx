import { FC } from "react";
import clsx from "clsx";

import Image from "../Image/Image";

interface IButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  withArrow?: boolean;
  color?: string;
  text: string;
  icon?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

const Button: FC<IButtonProps> = ({
  onClick,
  className = "",
  disabled = false,
  withArrow = false,
  color = "black",
  text,
  icon
}) => (
  <button
    type='button'
    onClick={onClick}
    className={clsx(
      `flex items-center justify-center px-[30px] rounded-32 transition-all duration-200 ease-in-out`,
      className,
      {
        "bg-white text-black hover:bg-white-300 hover:text-grey-800 active:bg-white-700 active:text-grey-900 border border-black hover:border-grey-800 active:border-grey-900":
          color === "white" && !disabled,
        "bg-black text-white hover:bg-grey-800 active:bg-grey-900": color === "black" && !disabled,
        "bg-grey text-white": disabled && color === "black",
        "bg-white-500 text-grey": disabled && color === "white",
        "pr-4 gap-[30px]": withArrow,
        "gap-1": icon
      }
    )}
    disabled={disabled}
  >
    {icon && <Image src={icon.src} width={icon.width} height={icon.height} alt={icon.alt} />}
    <span>{text}</span>
    {withArrow && <Image src='/svgs/arrow_right_icon.svg' width={24} height={24} alt='Right arrow' />}
  </button>
);

export default Button;
