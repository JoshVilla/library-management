export type BorrowedBook = {
  _id: string;
  studentId: string;
  usn: string;
  studentName: string;
  fromDate: string; // ISO date string
  toDate: string; // ISO date string
  isApproved: number;
  isCanceled: boolean;
  reason: string;
  bookId: string;
  titleBook: string;
  authorBook: string;
  reasonToChangeStatus: string;
  dateReturned: string | null; // Can be empty
  bookCode: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};

export interface IAnnouncement {
  _id: string;
  announcement: string;
  isPinned: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export interface IStudent {
  _id: string;
  firstname: string;
  middleinitial: string;
  lastname: string;
  numberOfBooksBorrowed: number;
  totalOfBooksBorrowed: number;
  usn: string;
  isRegistered: boolean;
  pictureUrl: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface INotification {
  _id: string;
  message: string;
  isRead: boolean;
  reason: string;
  titleBook: string;
  borrowDuration: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBook {
  _id: string;
  title: string;
  author: string;
  description: string;
  quantity: number;
  bookCode: number;
  pictureUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ILoginParams {
  usn: string;
  password: string;
}

export interface IRegisterParams {
  firstname: string;
  middleinitial: string;
  lastname: string;
  usn: string;
  password: string;
  picture?: File;
}

export interface IRequestBookParams {
  studentId: string;
  usn: string;
  studentName: string;
  fromDate: string;
  toDate: string;
  bookId: string;
  titleBook: string;
  authorBook: string;
  bookCode: number;
}

export interface IUpdateRequestParams {
  id: string;
  isApproved: number;
}

export interface IAnnouncementParams {
  announcement: string;
  isPinned: boolean;
}

export interface INotificationParams {
  message: string;
  reason: string;
  titleBook: string;
  borrowDuration: string;
}

export interface IChangePasswordParams {
  id: string;
  currentPassword: string;
  newPassword: string;
}

export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface IServiceParams {
  [key: string]: any;
}

export interface IMyFavoritesParams {
  userId: string;
  bookId: string;
  title: string;
  author: string;
  pictureUrl: string;
}

export interface IRemoveFavoritesParams {
  userId?: string;
  bookId?: string;
}

export interface IBookRequest {
  _id: string;
  titleBook: string;
  authorBook: string;
  isApproved: number;
  fromDate: string;
  toDate: string;
  createdAt: string;
}


