import { ID, storage } from "@/appwrite"
const uploadImge = async (file: File) => {
  if (!file) return;

  const fileUpload = await storage.createFile(
    "6483e3a8540c7f1d3d97",
    ID.unique(),
    file
  );
  
  return fileUpload;
};

export default uploadImge;