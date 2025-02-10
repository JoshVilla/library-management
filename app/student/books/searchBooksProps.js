import { bookCategories, REGEX } from "@/utils/constant";

export const searchProps = [
  {
    name: "title",
    placeholder: "Search Book Title",
    type: "input",
  },
  {
    name: "author",
    placeholder: "Search Author",
    type: "input",
  },
  // {
  //   name: "bookCode",
  //   placeholder: "Search Book Codes",
  //   type: "input",
  //   onChange: (event) => {
  //     return event.target.value.replace(REGEX.NUMBER_ONLY, "");
  //   },
  // },
  {
    name: "category",
    placeholder: "Search Category",
    type: "select",
    options: [
      { label: "Educational", value: "Educational" },
      { label: "English", value: "English" },
      { label: "History", value: "History" },
      { label: "Science", value: "Science" },
      { label: "Math", value: "Math" },
      { label: "Horror", value: "Horror" },
    ],
  },
];
