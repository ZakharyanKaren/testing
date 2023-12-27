import { Metadata } from "next";

import ExhibitionsEventsModule from "@/modules/ExhibitionsEventsModule";

export const metadata: Metadata = {
  title: "Exhibitions and Events"
};

export default function ExhibitionsEvents() {
  return <ExhibitionsEventsModule />;
}
