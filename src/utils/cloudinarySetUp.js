import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localPath) => {
  try {
    if (!localPath) {
      return null;
    }
    const cloudLink = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
    });

    if (cloudLink.url) {
      fs.unlinkSync(localPath);
    }
    return cloudLink;
  } catch (error) {
    fs.unlinkSync(localPath);
    console.log("Error while upload image on cloudinary: ", error);
    return null;
  }
};

export { uploadOnCloudinary };
