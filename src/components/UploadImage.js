import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'image/png' && selectedFile.size <= MAX_FILE_SIZE) {
        setFile(URL.createObjectURL(selectedFile));
        setError('');
      } else {
        setFile(null);
        setError('Please upload a valid .png file under 2 MB.');
      }
    }
  };

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, [file]);

  const addPoints = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    console.log('Current User:', user); // Debugging line

    if (user) {
      setLoading(true);
      // Show success message immediately
      setUploadSuccess(true);
      setFile(null);
      alert('Congratulations! You got +100 points!');

      try {
        const userDocRef = doc(db, 'users', user.uid);
        console.log('Updating points for user:', user.uid); // Debugging line

        // Simulate a delay before updating points
        await new Promise((resolve) => setTimeout(resolve, 2000));

        await updateDoc(userDocRef, {
          points: increment(100),
        });

        console.log('Points updated successfully!'); // Debugging line
        setTimeout(() => {
          navigate('/dashboard');
        }, 5000);
      } catch (err) {
        console.error('Error updating points:', err); // Log the error
        setError('Failed to update points. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      console.error('User is not authenticated'); // Debugging line
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
        disabled={loading} 
        className={`mt-4 ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white px-4 py-2 rounded`}
      >
        {loading ? 'Uploading...' : 'Upload Image & Get Points'}
      </button>
      {uploadSuccess && <p className="text-green-500 mt-2">Image successfully submitted!</p>}
    </div>
  );
};

export default UploadImage;
