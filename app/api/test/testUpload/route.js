import cloudinary from "@/lib/cloudinaryConfig";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), {
        status: 400,
      });
    }

    const buffer = await file.arrayBuffer();

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: "nextjs_uploads",
          timeout: 120000,
        },
        (error, result) => {
          if (error) {
            console.error("Upload failed:", error);
            resolve(
              new Response(
                JSON.stringify({ error: error.message, details: error }),
                { status: 500 }
              )
            );
          } else {
            console.log("Upload successful:", result);
            resolve(
              new Response(
                JSON.stringify({ success: true, url: result.secure_url }),
                { status: 200 }
              )
            );
          }
        }
      );

      // Pipe the buffer to the upload stream
      uploadStream.end(Buffer.from(buffer));
    });
  } catch (error) {
    console.error("File upload failed:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
