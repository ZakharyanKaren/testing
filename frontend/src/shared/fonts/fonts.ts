import localFont from "next/font/local";

const suisseIntl = localFont({
  src: "../static-fonts/SuisseIntl-Regular.otf",
  weight: "400",
  style: "normal",
  preload: true
});

const awesomeSerif = localFont({
  src: [
    {
      path: "../static-fonts/AwesomeSerif-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../static-fonts/AwesomeSerifItalic-Regular.otf",
      weight: "400",
      style: "italic"
    }
  ],
  preload: true
});

export { awesomeSerif, suisseIntl };
