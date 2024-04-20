import React, { useEffect } from 'react'
import Navbar from './Navbar';


function checkForToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
  }
}

const Dashboard = () => {

  useEffect(()=>{
    checkForToken();
  },[]);
  return (
    <>
      <Navbar />
 
    <div>Dashboard</div>
    </>
  )
}

export default Dashboard