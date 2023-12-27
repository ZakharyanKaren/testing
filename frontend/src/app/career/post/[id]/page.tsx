import { Metadata } from "next";

import SinglePostModule from "@/modules/SinglePostModule";

export const metadata: Metadata = {
  title: "Career"
};

export default function Post() {
  return <SinglePostModule />;
}
