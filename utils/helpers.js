// helpers.js
import cloudinary from "@/lib/cloudinaryConfig";
import { connectToDatabase } from "@/lib/mongodb";
import { format } from "date-fns";

export const getCloudinaryPublicId = (url) => {
  if (!url) return null;

  try {
    const urlParts = url.split("/");
    const filenameWithExtension = urlParts.pop();
    const folder = urlParts.pop();

    if (!folder || !filenameWithExtension) return null;

    const filename = filenameWithExtension.split(".")[0];
    return `${folder}/${filename}`;
  } catch (error) {
    console.error("Error parsing Cloudinary URL:", error);
    return null;
  }
};

export const deleteCloudinaryImage = async (publicId) => {
  if (!publicId) return null;

  try {
    const result = await cloudinary.v2.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw error;
  }
};

export const replaceNewImagefromCurrentImage = async (collection, id) => {
  try {
    await connectToDatabase();
    const res = await collection.findById(id); // Use findById instead of find
    console.log(res, "from");
    if (res) {
      const publicId = getCloudinaryPublicId(res.pictureUrl);
      if (publicId) {
        await deleteCloudinaryImage(publicId);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const renderDate = (date = "") => {
  if (!date) return "";
  const newDate = new Date(date);
  return format(newDate, "MMM dd, yyyy");
};

export const isExpired = (fromDate) => {
  return new Date(fromDate).getTime() < new Date().setHours(0, 0, 0, 0);
};

export function getCurrentDayName(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
}
