export const REGEX = {
  ALPHABET_ONLY: /[^A-Za-z]/g,
  NUMBER_ONLY: /\D/g,
  ALL_CHARACTERS: /[\s\S]/,
};

export const bookCategories = [
  "Educational",
  "English",
  "History",
  "Science",
  "Math",
  "Horror",
];

export const STATUS = {
  RETURNED: 4,
  INPROGRESS: 3,
  PENDING: 2,
  APPROVED: 1,
  CANCELLED: 0,
};
