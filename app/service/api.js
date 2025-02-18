import { post } from "./service";

export const getStudents = async (params) => {
  return await post("/api/admin", params);
};

export const addStudents = async (params) => {
  return await post("/api/admin/addAdmin", params);
};

export const deleteStudent = async (params) => {
  return await post("/api/admin/deleteStudent", params);
};

export const editStudent = async (params, hasFormData) => {
  return await post("/api/admin/editAdmin", params, hasFormData);
};

export const getBooks = async (params) => {
  return await post("/api/book", params);
};

export const addBook = async (params, hasFormData) => {
  return await post("/api/book/addBook", params, hasFormData);
};

export const deleteBook = async (params) => {
  return await post("/api/book/deleteBook", params);
};

export const testUpload = async (params, isFileUpload) => {
  return await post("/api/test/testUpload", params, isFileUpload);
};

export const updateBook = async (params, hasFormData) => {
  return await post("/api/book/editBook", params, hasFormData);
};

export const dashboard = async () => {
  return await post("/api/dashboard");
};

export const login = async (params) => {
  return await post("/api/login", params);
};

export const register = async (params) => {
  return await post("/api/register", params);
};

export const requestBook = async (params) => {
  return await post("/api/requestBook", params);
};

export const getBorrowedBooks = async (params) => {
  return await post("/api/borrowBook", params);
};

export const updateRequestBook = async (params) => {
  return await post("/api/borrowBook/updateStatus", params);
};

export const deleteRequest = async (params) => {
  return await post("/api/requestBook/deleteRequest", params);
};

export const getAnnouncement = async (params) => {
  return await post("/api/announcement", params);
};

export const addAnnouncement = async (params) => {
  return await post("/api/announcement/addAnnouncement", params);
};

export const deleteAnnouncement = async (params) => {
  return await post("/api/announcement/deleteAnnouncement", params);
};
export const updateAnnouncement = async (params) => {
  return await post("/api/announcement/updateAnnouncement", params);
};
export const getNotification = async (params) => {
  return await post("/api/notification", params);
};

export const notificationItem = async (params) => {
  return await post("/api/notification/getNotif", params);
};

export const readNotification = async (params) => {
  return await post("/api/notification/readNotification", params);
};

export const addNotification = async (params) => {
  return await post("/api/notification/addNotification", params);
};

export const updateMonthlyBorrowedBooksStats = async (params) => {
  return await post("/api/adminGraphs", params);
};

export const getMonthlyBorrowedBooksStats = async (params) => {
  return await post("/api/adminGraphs/getAdminGraphs", params);
};

export const updateQuantity = async (params) => {
  return await post("/api/book/reduceQuantityBook", params);
};

export const updateWeeklyBookStats = async (params) => {
  return await post("/api/book/weeklyStats/updateWeeklyStats", params);
};

export const weeklyBookStats = async (params) => {
  return await post("/api/book/weeklyStats", params);
};
