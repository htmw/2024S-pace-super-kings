import React from 'react'
import './tabbar.css';

const TabBar = ({activeTab, onTabChange}) => {


  const handleTabClick = (tab) => {
    onTabChange(tab);
  };
  return (
    <div className='tabBar'>
        
        {/* <button id='tabBarBTN' onClick={()=> onTabChange('orders')} className={activeTab === 'orders' ? 'active': ''} >Orders</button>
        <button id='tabBarBTN' onClick={()=> onTabChange('portfolio')} className={activeTab === 'portfolio' ? 'active': ''} >My Portfolio</button>
        <button id='tabBarBTN' onClick={()=> onTabChange('topup')} className={activeTab === 'topup' ? 'active': ''} >Top Up</button> */}
        

        <div
        className={`tab ${activeTab === 'chart' ? 'active' : ''}`}
        onClick={() => handleTabClick('chart')}
      >
        Charts
      </div>
      <div
        className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => handleTabClick('orders')}
      >
        Orders
      </div>
      <div
        className={`tab ${activeTab === 'portfolio' ? 'active' : ''}`}
        onClick={() => handleTabClick('portfolio')}
      >
        Portfolio
      </div>
      <div
        className={`tab ${activeTab === 'topup' ? 'active' : ''}`}
        onClick={() => handleTabClick('topup')}
      >
        Top Up
      </div>
    </div>
     
  )

}

export default TabBar