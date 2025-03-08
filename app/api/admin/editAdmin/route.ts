import { NextRequest, NextResponse } from "next/server";
import Admin from "@/app/models/admin";
import { connectToDatabase } from "@/lib/mongodb";
import {
  comparePassword,
  hashPassword,
  replaceNewImagefromCurrentImage,
} from "@/utils/helpers";
import cloudinary from "@/lib/cloudinaryConfig";
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const formData = await request.formData();
    const id = formData.get("id");
    const picture = formData.get("picture");
    const currentPassword = formData.get("currentPassword");
    const isSuperAdmin = formData.get("isSuperAdmin");

    let params: any = {};
    if (formData.get("username")) params.username = formData.get("username");
    if (formData.get("password")) params.password = formData.get("password");
    if (formData.get("isSuperAdmin"))
      params.isSuperAdmin = formData.get("isSuperAdmin");

    if (picture) {
      try {
        if (picture instanceof File) {
          const buffer = Buffer.from(await picture.arrayBuffer()); // Ensure correct buffer conversion
          const imageUrl = await new Promise((resolve, reject) => {
            cloudinary.v2.uploader
              .upload_stream({ folder: "admin_pictures" }, (error, result) => {
                if (error) {
                  console.error("Cloudinary upload failed:", error);
                  reject(new Error("Failed to upload image"));
                } else {
                  console.log(
                    "Cloudinary upload successful:",
                    result?.secure_url
                  );
                  resolve(result?.secure_url);
                }
              })
              .end(buffer);
          });
          await replaceNewImagefromCurrentImage(Admin, id);
          params.pictureUrl = imageUrl;
        }
      } catch (error: any) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    if (params.password) {
      const oldAdminPassword = await Admin.findById(id);
      const isCurrentPasswordMatch = await comparePassword(
        currentPassword,
        oldAdminPassword?.password
      );

      if (!isCurrentPasswordMatch) {
        return NextResponse.json(
          { error: "Current password is incorrect" },
          { status: 400 }
        );
      } else {
        params.password = await hashPassword(params.password);
      }
    }

    const countSuperAdmin = await Admin.countDocuments({
      isSuperAdmin: true,
    });

    if (isSuperAdmin === "false" && countSuperAdmin === 1) {
      return NextResponse.json(
        { error: "There must be at least one super admin" },
        { status: 400 }
      );
    }
    const newAdmin = await Admin.findByIdAndUpdate(id, params, {
      new: true,
      runValidators: true,
    });
    return NextResponse.json(
      {
        message: "Your details have been updated successfully",
        data: newAdmin,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Admin update failed" }, { status: 500 });
  }
}
