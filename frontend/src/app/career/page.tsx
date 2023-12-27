import { Metadata } from "next";

import CareerModule from "@/modules/CareerModule";

export const metadata: Metadata = {
  title: "Career"
};

export default function Career() {
  return <CareerModule />;
}
