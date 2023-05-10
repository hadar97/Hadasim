
import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
export default   withRouter(function myco(props) {
const UploadImg=()=>{
const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = async(event) => {
    debugger
    const selectedFile = event.target.files[0];

    if (selectedFile && isImageFile(selectedFile)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please select a valid image file (JPEG, PNG, or GIF)");
    }
  };

  const handleUpload = async (event) => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("https://localhost:44359/api/Workers/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("Image uploaded successfully");
        } else {
          throw new Error(await response.text());
        }
      } catch (ex) {
        alert(`Error: ${ex.message}`);
      }
    } else {
      setError("Please select an image file");
    }
  };

  const isImageFile = (file) => {
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif"];
    return file && acceptedImageTypes.includes(file.type);
  };
}
  return (
    <div>
      <input type="file" id="mypic" onChange={(event)=>handleFileChange(event)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={(event)=>handleUpload(event)}>Upload</button>
    </div>
  );
}, []);

