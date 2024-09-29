// src/components/UploadImage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadImage = ({ setUserPoints }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
  const navigate = useNavigate();

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

  const addPoints = () => {
    setLoading(true);
    alert('Congratulations! You got +100 points!');

    // Increment points
    setUserPoints(prevPoints => prevPoints + 100);

    // Simulate a delay before navigating
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 2000);
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
    </div>
  );
};

export default UploadImage;
