// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [points, setPoints] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const [shopItems, setShopItems] = useState([
    { id: 1, name: 'Fridge', price: 25000, img: 'path/to/fridge.jpg' },
    { id: 2, name: 'Vacuum Cleaner', price: 30000, img: 'path/to/vacuum.jpg' },
    { id: 3, name: 'iPhone', price: 50000, img: 'path/to/iphone.jpg' },
    { id: 4, name: 'Smart TV', price: 40000, img: 'path/to/tv.jpg' },
    { id: 5, name: 'Laptop', price: 45000, img: 'path/to/laptop.jpg' },
    { id: 6, name: 'Camera', price: 35000, img: 'path/to/camera.jpg' },
    { id: 7, name: 'Air Conditioner', price: 50000, img: 'path/to/ac.jpg' },
    { id: 8, name: 'Coffee Machine', price: 30000, img: 'path/to/coffee.jpg' },
    { id: 9, name: 'Microwave', price: 25000, img: 'path/to/microwave.jpg' },
    { id: 10, name: 'Smartwatch', price: 40000, img: 'path/to/smartwatch.jpg' },
  ]);

  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setPoints(userDoc.data().points);
          setUserDetails({ 
            email: user.email,
            id: user.uid,
            password: '****' // Placeholder for password (do not store or show actual passwords)
          });
        }
      }
    };
    fetchUserDetails();
  }, [user, db]);

  const handleBuyItem = (item) => {
    if (points >= item.price) {
      alert(`You bought a ${item.name} for ${item.price} points!`);
      // Here you should add functionality to deduct points and update the database
    } else {
      alert(`You do not have enough points to buy a ${item.name}.`);
    }
  };

  return (
    <div className="dashboard container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Welcome, {userDetails.email}!</h1>

      {/* User Info Box */}
      <div className="bg-white shadow-lg rounded-lg p-5 mb-5">
        <h2 className="text-xl font-semibold">User Info</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>User ID:</strong> {userDetails.id}</p>
        <p><strong>Password:</strong> {userDetails.password}</p>
      </div>

      {/* Points Box */}
      <div className="bg-white shadow-lg rounded-lg p-5 mb-5">
        <h2 className="text-xl font-semibold">Your Points</h2>
        <p className="text-2xl">{points} Points</p>
      </div>

      {/* Shop Items Box */}
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-xl font-semibold">Shop Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {shopItems.map(item => (
            <div key={item.id} className="bg-gray-100 p-3 rounded-lg flex flex-col items-center">
              <img src={item.img} alt={item.name} className="h-32 w-32 object-cover mb-2" />
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-lg">{item.price} Points</p>
              <button 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleBuyItem(item)}
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
