import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [points, setPoints] = useState(0);
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchPoints = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setPoints(userDoc.data().points);
        }
      }
    };
    fetchPoints();
  }, [user, db]);

  return (
    <div className="dashboard">
      <h1>Welcome, {user ? user.email : 'User'}!</h1>
      <h2>Your Points: {points}</h2>
    </div>
  );
};

export default Dashboard;
