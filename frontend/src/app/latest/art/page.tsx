import { Metadata } from "next";

import ArtModule from "@/modules/ArtModule";

export const metadata: Metadata = {
  title: "Art"
};

export default function Art() {
  return <ArtModule />;
}
