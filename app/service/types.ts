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
