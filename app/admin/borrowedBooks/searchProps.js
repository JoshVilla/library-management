import { REGEX, STATUS } from "@/utils/constant";

export const searchProps = [
  {
    name: "studentName",
    placeholder: "Search Student",
    type: "input",
  },
  {
    name: "usn",
    placeholder: "Search USN",
    type: "input",
    onchange: (event) => {
      return event.target.value.replace(REGEX.NUMBER_ONLY, "");
    },
  },
  {
    name: "isApproved",
    placeholder: "Search Status",
    type: "select",
    options: [
      {
        value: STATUS.APPROVED,
        label: "Aprroved",
      },
      {
        value: STATUS.INPROGRESS,
        label: "Borrowing in Progress",
      },
      {
        value: STATUS.PENDING,
        label: "Pending",
      },
      {
        value: STATUS.RETURNED,
        label: "Returned",
      },
      {
        value: STATUS.CANCELLED,
        label: "Cancelled",
      },
    ],
  },
];
