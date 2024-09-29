// src/components/UploadImage.js
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'image/png') {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please upload a valid .png file.');
    }
  };

  const addPoints = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && file) {
      const userDocRef = doc(db, 'users', user.uid);

      // Increment the points by 100
      await updateDoc(userDocRef, {
        points: 100, // This should increment by 100 each time; adjust logic as needed
      });

      setFile(null);
      alert('100 points added to your account!');
      navigate('/dashboard'); // Redirect to dashboard after upload
    } else {
      setError('Error uploading image. Please try again.');
    }
  };

  return (
    <div className="upload-container">
      <h2>Claim Points by Recycling</h2>
      <p>Upload a .png image of the item you want to recycle.</p>
      <input type="file" onChange={handleFileChange} accept=".png" />
      {error && <p className="error-text">{error}</p>}
      <button onClick={addPoints} disabled={!file} className="btn-upload">
        Upload Image & Get Points
      </button>
    </div>
  );
};

export default UploadImage;
