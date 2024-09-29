import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPoints = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setPoints(userDoc.data().points);
          } else {
            setError("User data not found.");
          }
        } catch (err) {
          setError("Failed to fetch user data.");
        }
      } else {
        navigate('/login'); // Redirect to login if not authenticated
      }
      setLoading(false);
    };

    fetchPoints();
  }, [user, db, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Error handling
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {user ? user.email : 'User'}!</h1>
      <h2>Your Points: {points}</h2>
    </div>
  );
};

export default Dashboard;
