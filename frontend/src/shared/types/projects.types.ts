export interface IImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface IImages {
  id: number;
  title: string;
  subtitle?: string;
  className: string;
  wrapperClassName?: string;
  image: IImage;
  secondImage?: IImages;
}

export interface IProject {
  id: number;
  className: string;
  images: IImages[];
}
