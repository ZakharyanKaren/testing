import { Metadata } from "next";

import HistoryModule from "@/modules/HistoryModule/HistoryModule";

export const metadata: Metadata = {
  title: "History"
};

export default function History() {
  return <HistoryModule />;
}
