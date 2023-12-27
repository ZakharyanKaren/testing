import { IProject } from "@/shared/types";

const projects: IProject[] = [
  {
    id: 1,
    className: "gap-x-[10px] md:gap-x-5 xl:gap-x-[30px]",
    images: [
      {
        id: 2,
        title: "Health quarters",
        className: "hidden md:block w-[50%] md:w-[42%] md:max-w-[499px]",
        image: {
          src: "/projects/health_quarters.png",
          width: 499,
          height: 280,
          alt: "Health quarters"
        }
      },
      {
        id: 3,
        title: "Health quarters",
        className: "md:hidden w-[50%]",
        image: {
          src: "/projects/health_quarters_mobile.png",
          width: 166,
          height: 160,
          alt: "Health quarters"
        }
      },
      {
        id: 4,
        title: "meta office interior design",
        className: "hidden md:block w-[50%] md:w-[58%] md:max-w-[711px]",
        image: {
          src: "/projects/meta_office.png",
          width: 711,
          height: 280,
          alt: "Meta office"
        }
      },
      {
        id: 5,
        title: "meta office interior design",
        className: "md:hidden w-[50%] md:w-[58%] md:max-w-[711px]",
        image: {
          src: "/projects/meta_office_mobile.png",
          width: 711,
          height: 280,
          alt: "Meta office"
        }
      }
    ]
  },
  {
    id: 6,
    className: "flex-col md:flex-row md:gap-x-5 xl:gap-x-[30px]",
    images: [
      {
        id: 7,
        title: "The Citizenry",
        className: "w-full md:w-[40%]",
        image: {
          src: "/projects/citizenry.png",
          width: 343,
          height: 193,
          alt: "The Citizenry"
        }
      },
      {
        id: 8,
        title: "NYC parks",
        className: "md:max-w-[287px]",
        wrapperClassName: "flex gap-x-3 lg:gap-x-6 xl:gap-x-8 w-full md:w-[58%] md:max-w-[711px]",
        image: {
          src: "/projects/nyc_parks.png",
          width: 165,
          height: 160,
          alt: "NYC parks"
        },
        secondImage: {
          id: 9,
          title: "Nordic Cuisine",
          subtitle: "Storms",
          className: "w-1/2 md:max-w-[287px]",
          image: {
            src: "/projects/nordic_cuisine.png",
            width: 165,
            height: 160,
            alt: "Nordic Cuisine"
          }
        }
      }
    ]
  },
  {
    id: 12,
    className: "flex-col md:flex-row md:hidden items-end",
    images: [
      {
        id: 13,
        title: "Gansevoort meatpacking",
        className: "w-full",
        image: {
          src: "/projects/gansevoort_meatpacking.png",
          width: 343,
          height: 331,
          alt: "Gansevoort meatpacking"
        }
      },
      {
        id: 12,
        title: "daya by zendaya",
        subtitle: "Campaign",
        className: "w-[48%]",
        image: {
          src: "/projects/zendaya.png",
          width: 343,
          height: 331,
          alt: "Zendaya"
        }
      }
    ]
  },
  {
    id: 11,
    className:
      "flex-col md:flex-row hidden md:flex md:gap-x-[116px] lg:gap-x-[126px] xl:gap-x-[136px] items-end md:items-start",
    images: [
      {
        id: 12,
        title: "22 Vanderbilt",
        className: "md:w-[58%] md:max-w-[711px]",
        image: {
          src: "/projects/vanderbilt.png",
          width: 343,
          height: 331,
          alt: "Vanderbilt"
        }
      },
      {
        id: 13,
        title: "Peoplehood",
        subtitle: "Campaign",
        className: "md:w-[32%] md:max-w-[393px]",
        image: {
          src: "/projects/peoplehood.png",
          width: 393,
          height: 490,
          alt: "Peoplehood"
        }
      }
    ]
  },
  {
    id: 14,
    className: "flex-col md:flex-row md:gap-x-[30px]",
    images: [
      {
        id: 15,
        title: "Aesop signage",
        className: "w-[48%] md:w-[23%] md:max-w-[288px]",
        image: {
          src: "/projects/aesop.png",
          width: 165,
          height: 160,
          alt: "Aesop signage"
        }
      },
      {
        id: 16,
        title: "Dolby Atmos signage",
        className: "w-full md:w-[40%] md:max-w-[500px]",
        image: {
          src: "/projects/dolby.png",
          width: 343,
          height: 193,
          alt: "Dolby Atmos"
        }
      },
      {
        id: 18,
        title: "Clean Market",
        className: "w-full md:w-[32%] md:max-w-[394px]",
        image: {
          src: "/projects/clean_market.png",
          width: 343,
          height: 331,
          alt: "Clean Market"
        }
      }
    ]
  },
  {
    id: 19,
    className: "flex-col md:flex-row md:hidden",
    images: [
      {
        id: 20,
        title: "Maison Ullens",
        className: "w-full md:hidden",
        image: {
          src: "/projects/maison_ullens.png",
          width: 343,
          height: 193,
          alt: "Maison Ullens"
        }
      }
    ]
  },
  {
    id: 21,
    className: "flex-col md:flex-row md:hidden",
    images: [
      {
        id: 22,
        title: "Scanlan Theodore",
        className: "w-[48%] md:hidden",
        image: {
          src: "/projects/scanlan_theodore.png",
          width: 166,
          height: 203,
          alt: "Scanlan Theodore"
        }
      }
    ]
  },
  {
    id: 23,
    className: "flex-col md:flex-row md:hidden",
    images: [
      {
        id: 24,
        title: "Seamores",
        className: "w-full md:hidden",
        image: {
          src: "/projects/seamores.png",
          width: 343,
          height: 193,
          alt: "Seamores"
        }
      }
    ]
  },
  {
    id: 25,
    className: "flex-col md:flex-row md:hidden items-end",
    images: [
      {
        id: 26,
        title: "Scanlan Theodore",
        className: "w-[48%]",
        image: {
          src: "/projects/scanlan_theodore.png",
          width: 166,
          height: 203,
          alt: "Scanlan Theodore"
        }
      }
    ]
  },
  {
    id: 27,
    className: "flex-col md:flex-row md:gap-x-[30px]",
    images: [
      {
        id: 28,
        title: "Blue dot",
        className: "hidden md:block md:w-[40%] md:max-w-[500px]",
        image: {
          src: "/projects/blue_dot.png",
          width: 500,
          height: 326,
          alt: "Blue dot"
        }
      },
      {
        id: 29,
        title: "DR Smood",
        className: "w-full md:w-3/5 md:max-w-[711px]",
        image: {
          src: "/projects/dr_smood.png",
          width: 343,
          height: 331,
          alt: "DR Smood"
        }
      }
    ]
  },
  {
    id: 30,
    className: "flex-col md:flex-row md:hidden",
    images: [
      {
        id: 31,
        title: "Parsley health",
        className: "w-1/2",
        wrapperClassName: "flex gap-x-3 w-full",
        image: {
          src: "/projects/parsley_health.png",
          width: 165,
          height: 235,
          alt: "Parsley health"
        },
        secondImage: {
          id: 32,
          title: "Kong food",
          className: "w-1/2",
          image: {
            src: "/projects/kong_food_mobile.png",
            width: 165,
            height: 160,
            alt: "Kong food"
          }
        }
      }
    ]
  },
  {
    id: 33,
    className: "flex-col md:flex-row hidden md:flex md:gap-x-[30px] flex-row",
    images: [
      {
        id: 34,
        title: "Le district",
        className: "w-full md:max-w-[393px]",
        image: {
          src: "/projects/le_district.png",
          width: 166,
          height: 203,
          alt: "Le district"
        }
      },
      {
        id: 35,
        title: "Button burger",
        className: "w-full md:max-w-[393px]",
        image: {
          src: "/projects/button_burger.png",
          width: 343,
          height: 331,
          alt: "Button burger"
        }
      },
      {
        id: 36,
        title: "Kong food",
        className: "w-full md:max-w-[393px]",
        image: {
          src: "/projects/kong_food.png",
          width: 166,
          height: 203,
          alt: "Kong food"
        }
      }
    ]
  }
];

export default projects;
