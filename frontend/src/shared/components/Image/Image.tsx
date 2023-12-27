import { FC } from "react";
import NextImage from "next/image";

interface IImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  priority?: boolean;
}

const Image: FC<IImage> = ({ src, width, height, alt, ...props }) => (
  <NextImage src={src} width={width} height={height} alt={alt} quality={100} {...props} />
);

export default Image;
