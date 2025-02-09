import { REGEX } from "@/utils/constant";

export const formFields = [
  {
    name: "firstname",
    label: "Firstname",
    rules: {
      pattern: {
        value: /^[A-Za-z]*$/,
        message: "Only alphabets are allowed",
      },
    },
    regex: REGEX.ALPHABET_ONLY,
  },
  {
    name: "middleinitial",
    label: "Middle Initial",
    rules: {
      pattern: {
        value: /^[A-Za-z]*$/,
        message: "Only alphabets are allowed",
      },
    },
    regex: REGEX.ALPHABET_ONLY,
  },
  {
    name: "lastname",
    label: "Lastname",
    rules: {
      pattern: {
        value: /^[A-Za-z]*$/,
        message: "Only alphabets are allowed",
      },
    },
    regex: REGEX.ALPHABET_ONLY,
  },
  {
    name: "usn",
    label: "USN Number",
    rules: {
      pattern: {
        value: /^[0-9]*$/,
        message: "Only numbers are allowed",
      },
    },
    regex: REGEX.NUMBER_ONLY,
  },
];
