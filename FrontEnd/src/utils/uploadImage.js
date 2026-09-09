export const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "instagram_clone");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/mqrwovs6/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  return data.secure_url;
};