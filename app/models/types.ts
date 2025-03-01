import { Document, Model } from "mongoose";

export interface IUserDocument extends Document {
  firstname: string;
  middleinitial: string;
  lastname: string;
  numberOfBooksBorrowed: number;
  totalOfBooksBorrowed: number;
  usn: string;
  isRegistered: boolean;
  pictureUrl: string | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBookDocument extends Document {
  title: string;
  author: string;
  description: string;
  bookCode: number;
  category: string;
  pictureUrl: string | null;
  numberOfBooksBorrowed: number;
  totalOfBooksBorrowed: number;
  available: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFavoriteDocument extends Document {
  userId: string;
  bookId: string;
  createdAt: Date;
  updatedAt: Date;
  pictureUrl: string | null;
  title: string;
  author: string;
}

export type UserModel = Model<IUserDocument>;
export type BookModel = Model<IBookDocument>; 
export type FavoriteModel = Model<IFavoriteDocument>;