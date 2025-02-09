import { bookCategories, REGEX } from "@/utils/constant";

export const formFields = [
  {
    name: "title",
    label: "Title of the Book",
    type: "input",
  },
  {
    name: "author",
    label: "Author of the Book",
    type: "input",
  },
  {
    name: "description",
    label: "Description of the Book",
    type: "input",
  },
  {
    name: "bookCode",
    label: "Code of the Book",
    type: "input",
    rules: {
      pattern: {
        value: /^[0-9]*$/,
        message: "Only numbers are allowed",
      },
    },
    regex: REGEX.NUMBER_ONLY,
  },
  {
    name: "category",
    label: "Category of the Book",
    categories: bookCategories,
    type: "select",
  },
  {
    name: "quantity",
    label: "Quantity",
    type: "input",
    rules: {
      pattern: {
        value: /^[0-9]*$/,
        message: "Only numbers are allowed",
      },
    },
    regex: REGEX.NUMBER_ONLY,
  },
];
