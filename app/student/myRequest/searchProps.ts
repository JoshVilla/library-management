import { SearchProp } from "@/components/searchForm/searchForm";

export const searchProps: SearchProp[] = [
  {
    name: "titleBook",
    placeholder: "Search Book Title", 
    type: "input",
  },
  {
    name: "authorBook",
    placeholder: "Search Author",
    type: "input",
  },
  {
    name: "isApproved",
    placeholder: "Search Status",
    type: "select",
    options: [
      { label: "Approved", value: 1 },
      { label: "Pending", value: 2 },
      { label: "Cancelled", value: 0 },
    ],
  },
];
