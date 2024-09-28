// src/components/UploadImage.js
import React, { useState } from "react";
import { db } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  function handleImageUpload(event) {
    setImage(event.target.files[0]);
  }

  async function handleSubmit() {
    if (image == null) return;

    const storageRef = ref(storage, `images/${image.name + uuidv4()}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    console.log("Uploaded image available at", url);
    // Run your OpenCV detection here
  }

  return (
    <div>
      <h2>Upload a Picture of Trash</h2>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
