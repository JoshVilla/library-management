import { post } from "./service";
import {
  IApiResponse,
  IStudent,
  IBook,
  ILoginParams,
  IRegisterParams,
  IRequestBookParams,
  IUpdateRequestParams,
  IAnnouncement,
  IAnnouncementParams,
  INotification,
  INotificationParams,
  IChangePasswordParams,
  IServiceParams,
  IMyFavoritesParams,
  IRemoveFavoritesParams,
  IBookRequest,
  BorrowedBook,
  StudentDashboard,
} from "./types";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getStudents = async (
  params: IServiceParams = {}
): Promise<IApiResponse<IStudent[]>> => {
  return await post<IStudent[]>("/api/student", params);
};

export const addStudents = async (
  params: IRegisterParams
): Promise<IApiResponse<IStudent>> => {
  return await post<IStudent>("/api/student/addStudent", params);
};

export const deleteStudent = async (params: {
  id: string;
}): Promise<IApiResponse<void>> => {
  return await post<void>("/api/student/deleteStudent", params);
};

export const editStudent = async (
  params: FormData | IServiceParams,
  hasFormData: boolean = false
): Promise<IApiResponse<IStudent>> => {
  return await post<IStudent>("/api/student/editStudent", params, hasFormData);
};

export const getBooks = async (
  params: IServiceParams = {}
): Promise<IApiResponse<IBook[]>> => {
  return await post<IBook[]>("/api/book", params);
};

export const addBook = async (
  params: FormData | IServiceParams,
  hasFormData: boolean = false
): Promise<IApiResponse<IBook>> => {
  return await post<IBook>("/api/book/addBook", params, hasFormData);
};

export const deleteBook = async (params: {
  id: string;
  pictureUrl: string;
}): Promise<IApiResponse<void>> => {
  return await post<void>("/api/book/deleteBook", params);
};

export const updateBook = async (
  params: FormData | IServiceParams,
  hasFormData: boolean = false
): Promise<IApiResponse<IBook>> => {
  return await post<IBook>("/api/book/editBook", params, hasFormData);
};

export const dashboard = async (): Promise<IApiResponse<any>> => {
  return await post("/api/dashboard");
};

export const login = async (
  params: ILoginParams
): Promise<IApiResponse<IStudent & { token: string }>> => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const register = async (
  params: IRegisterParams
): Promise<IApiResponse<IStudent>> => {
  return await post<IStudent>("/api/register", params);
};

export const requestBook = async (
  params: IRequestBookParams
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/requestBook", params);
};

export const getBorrowedBooks = async (
  params: IServiceParams
): Promise<IApiResponse<IBookRequest[]>> => {
  return await post<IBookRequest[]>("/api/borrowBook", params);
};

export const updateRequestBook = async (
  params: BorrowedBook
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/borrowBook/updateStatus", params);
};

export const deleteRequest = async (params: {
  id: string;
}): Promise<IApiResponse<void>> => {
  return await post<void>("/api/requestBook/deleteRequest", params);
};

export const getAnnouncement = async (
  params: IServiceParams = {}
): Promise<IApiResponse<IAnnouncement[]>> => {
  return await post<IAnnouncement[]>("/api/announcement", params);
};

export const addAnnouncement = async (
  params: IAnnouncementParams
): Promise<IApiResponse<IAnnouncement>> => {
  return await post<IAnnouncement>("/api/announcement/addAnnouncement", params);
};

export const deleteAnnouncement = async (params: {
  id: string;
}): Promise<IApiResponse<void>> => {
  return await post<void>("/api/announcement/deleteAnnouncement", params);
};

export const updateAnnouncement = async (
  params: IAnnouncementParams & { id: string }
): Promise<IApiResponse<IAnnouncement>> => {
  return await post<IAnnouncement>(
    "/api/announcement/updateAnnouncement",
    params
  );
};

export const getNotification = async (
  params: IServiceParams = {}
): Promise<IApiResponse<INotification[]>> => {
  return await post<INotification[]>("/api/notification", params);
};

export const notificationItem = async (params: {
  id: string;
}): Promise<IApiResponse<INotification>> => {
  return await post<INotification>("/api/notification/getNotif", params);
};

export const readNotification = async (params: {
  id: string;
}): Promise<IApiResponse<void>> => {
  return await post<void>("/api/notification/readNotification", params);
};

export const addNotification = async (
  params: INotificationParams
): Promise<IApiResponse<INotification>> => {
  return await post<INotification>("/api/notification/addNotification", params);
};

export const updateMonthlyBorrowedBooksStats = async (
  params: IServiceParams
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/adminGraphs", params);
};

export const getMonthlyBorrowedBooksStats = async (
  params: IServiceParams = {}
): Promise<IApiResponse<any>> => {
  return await post("/api/adminGraphs/getAdminGraphs", params);
};

export const updateQuantity = async (params: {
  id: string;
  quantity: number;
}): Promise<IApiResponse<void>> => {
  return await post<void>("/api/book/reduceQuantityBook", params);
};

export const updateWeeklyBookStats = async (
  params: IServiceParams
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/book/weeklyStats/updateWeeklyStats", params);
};

export const weeklyBookStats = async (
  params: IServiceParams = {}
): Promise<IApiResponse<any>> => {
  return await post("/api/book/weeklyStats", params);
};

export const changePassword = async (
  params: IChangePasswordParams
): Promise<IApiResponse<IStudent>> => {
  return await post<IStudent>("/api/changePassword", params);
};

export const importStudent = async (
  params: FormData,
  hasFormData: boolean = true
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/import/student", params, hasFormData);
};

export const myFavorites = async (
  params: IServiceParams = {}
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/myFavorites", params);
};

export const addFavorites = async (
  params: IMyFavoritesParams
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/myFavorites/addFavorites", params);
};

export const removeFavorites = async (
  params: IRemoveFavoritesParams
): Promise<IApiResponse<void>> => {
  return await post<void>("/api/myFavorites/removeFavorites", params);
};

export const studentDashboard = async (
  params: IServiceParams = {}
): Promise<IApiResponse<StudentDashboard>> => {
  return await post<StudentDashboard>(
    "/api/dashboard/studentDashboard",
    params
  );
};
