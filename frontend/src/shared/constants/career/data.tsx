import { IFilterTabs } from "@/shared/types";

const FILTER_TABS: IFilterTabs[] = [
  {
    id: 1,
    title: "View all",
    value: "View all",
    isActive: true
  },
  {
    id: 2,
    title: "Marketing",
    value: "Marketing",
    isActive: false
  },
  {
    id: 3,
    title: "Customer Service",
    value: "Customer Service",
    isActive: false
  },
  {
    id: 4,
    title: "Finance",
    value: "Finance",
    isActive: false
  },
  {
    id: 5,
    title: "Management",
    value: "Management",
    isActive: false
  },
  {
    id: 6,
    title: "Operations",
    value: "Operations",
    isActive: false
  }
];

export default FILTER_TABS;
