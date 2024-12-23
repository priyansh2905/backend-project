import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //used to open, read, write, delete the file

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadClodinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type : "auto"
        })
        console.log("File is successfully uploaded to cloudinary : ", response.url);
        return response;
    } catch (error) { //when localFilePath exist but not uploaded
        fs.unlink(localFilePath) //remove the lacally saved files when operation is failed
        return null;
    }
}

export {uploadClodinary}
