// src/components/UploadImage.js
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'image/png') {
      setFile(URL.createObjectURL(selectedFile));
      setError('');
    } else {
      setFile(null);
      setError('Please upload a valid .png file.');
    }
  };

  const addPoints = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          points: increment(100),
        });
        setUploadSuccess(true);
        setFile(null);

        setTimeout(() => {
          alert('Congratulations! You got +100 points!');
          navigate('/dashboard');
        }, 5000);
      } catch (err) {
        setError('Failed to update points. Please try again.');
      }
    } else {
      setError('Error uploading image. Please try again.');
    }
  };

  return (
    <div className="upload-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Claim Points by Recycling</h2>
      <p>Upload a .png image of the item you want to recycle.</p>
      <input type="file" onChange={handleFileChange} accept=".png" className="my-4" />
      {error && <p className="text-red-500">{error}</p>}
      {file && <img src={file} alt="Preview" className="mt-4 w-48 h-48 object-cover" />}
      <button 
        onClick={addPoints} 
        disabled={!file} 
        className={`mt-4 ${file ? 'bg-blue-500' : 'bg-gray-300'} text-white px-4 py-2 rounded`}
      >
        Upload Image & Get Points
      </button>
      {uploadSuccess && <p className="text-green-500 mt-2">Image successfully submitted!</p>}
    </div>
  );
};

export default UploadImage;
