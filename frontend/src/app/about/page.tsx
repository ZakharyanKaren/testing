import { Metadata } from "next";

import AboutModule from "@/modules/AboutModule";

export const metadata: Metadata = {
  title: "About"
};

export default function About() {
  return <AboutModule />;
}
