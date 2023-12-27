import { Metadata } from "next";

import LatestModule from "@/modules/LatestModule";

export const metadata: Metadata = {
  title: "Latest"
};

export default function Latest() {
  return <LatestModule />;
}
