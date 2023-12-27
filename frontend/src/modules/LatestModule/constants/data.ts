interface IImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
}

export interface ILatestData {
  id: number;
  link: string;
  wrapperClassName: string;
  titleClassName: string;
  title: string | string[];
  image: {
    src: string;
    className: string;
  };
  image2?: IImage;
  image3?: IImage;
  number: string;
}

const data: ILatestData[] = [
  {
    id: 1,
    link: "/latest/history",
    title: "history",
    image: {
      src: "/svgs/top_right_arrow_icon.svg",
      className: ""
    },
    number: "01",
    titleClassName: "",
    wrapperClassName: "bg-teal-600"
  },
  {
    id: 2,
    link: "/latest/art",
    title: "art inspiration",
    image: {
      src: "/svgs/top_right_arrow_icon.svg",
      className: ""
    },
    number: "02",
    titleClassName: "w-[140px] md:w-full",
    wrapperClassName: "bg-amber-200 md:col-start-1 md:row-start-2 md:col-end-2"
  },
  {
    id: 3,
    link: "/latest/design",
    title: "design process",
    image: {
      src: "/svgs/top_right_arrow_icon.svg",
      className: "md:hidden"
    },
    image2: {
      src: "/svgs/right_arrow_icon.svg",
      width: 40,
      height: 40,
      alt: "arrow",
      className: "hidden md:block"
    },
    image3: {
      src: "/svgs/cursor.svg",
      width: 32,
      height: 32,
      alt: "cursor",
      className: "hidden md:block md:absolute right-[51px] top-[81px]"
    },
    number: "03",
    titleClassName: "lg:text-mm xl:text-s md:tracking-[1.5px]",
    wrapperClassName: "bg-teal-500 md:col-start-2 md:row-start-1 md:row-end-3"
  },
  {
    id: 4,
    link: "/latest/exhibitions-events",
    title: ["exhibitons", "and", "events"],
    image: {
      src: "/svgs/top_right_arrow_icon.svg",
      className: ""
    },
    number: "04",
    titleClassName: "w-[110px] md:w-full",
    wrapperClassName: "bg-stone-200"
  },
  {
    id: 5,
    link: "/latest/technology",
    title: "technology",
    image: {
      src: "/svgs/top_right_arrow_icon.svg",
      className: ""
    },
    number: "05",
    titleClassName: "w-[110px] md:w-full",
    wrapperClassName: "bg-teal-400"
  }
];

export default data;
