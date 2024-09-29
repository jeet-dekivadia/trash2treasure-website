// src/components/UploadImage.js
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  const addPoints = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          points: increment(100),
        });

        alert('Congratulations! You got +100 points!');
        navigate('/dashboard'); // Redirect to dashboard
      } catch (err) {
        setError('Failed to update points. Please try again.');
        console.error('Error updating points:', err); // Debugging output
      }
    } else {
      setError('Error: User not logged in. Please try again.');
      console.error('User not logged in'); // Debugging output
    }
  };

  return (
    <div className="upload-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Claim Points by Recycling</h2>
      <p>Click the button below to get points!</p>
      <button 
        onClick={addPoints} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload Image & Get Points
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default UploadImage;
