import { Metadata } from "next";

import HomeModule from "@/modules/HomeModule";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page"
};

export default function Home() {
  return <HomeModule />;
}
