import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Jeet Dekivadia',
    email: 'jeet.university@gmail.com',
    password: 'abc123',
    points: 1100
  });

  const [shopItems, setShopItems] = useState([
    { id: 1, name: 'Eco-friendly Water Bottle', price: 10000 },
    { id: 2, name: 'Reusable Shopping Bag', price: 5000 },
    { id: 3, name: 'Solar-powered Charger', price: 20000 }
  ]);

  const [recyclingData, setRecyclingData] = useState([
    { name: 'Jan', items: 65 },
    { name: 'Feb', items: 59 },
    { name: 'Mar', items: 80 },
    { name: 'Apr', items: 81 },
    { name: 'May', items: 56 },
    { name: 'Jun', items: 55 },
    { name: 'Jul', items: 40 }
  ]);

  const handleBuyItem = (item) => {
    if (userInfo.points >= item.price) {
      setUserInfo(prevState => ({
        ...prevState,
        points: prevState.points - item.price
      }));
      alert(`You bought ${item.name} for ${item.price} points!`);
    } else {
      alert("Not enough points to buy this item!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trash2Treasure Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>User Information</CardHeader>
          <CardContent>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Points: {userInfo.points}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>Recycling Progress</CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={recyclingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="items" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>Reward Shop</CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shopItems.map(item => (
              <div key={item.id} className="border p-2 rounded">
                <h3>{item.name}</h3>
                <p>{item.price} points</p>
                <button 
                  onClick={() => handleBuyItem(item)}
                  className="bg-green-500 text-white px-2 py-1 rounded mt-2"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
