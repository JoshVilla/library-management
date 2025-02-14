import { REGEX } from "@/utils/constant";

export const searchProps = [
  {
    name: "usn",
    placeholder: "Search USN",
    type: "input",
    onChange: (event) => {
      return event.target.value.replace(REGEX.NUMBER_ONLY, "");
    },
  },
  {
    name: "isRegistered",
    placeholder: "Search Status",
    type: "select",
    options: [
      {
        value: true,
        label: "Registered",
      },
      {
        value: false,
        label: "Not Registered",
      },
    ],
  },
];
