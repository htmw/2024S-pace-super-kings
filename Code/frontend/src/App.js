import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './Components/Landing';
// import Dashboard from './Components/Dashboard';
import ModuleHome from './Components/ModuleHome';
import Login from './Components/Login/Login';
import setupInterceptors from './network/networkInterceptor';
import { useEffect } from 'react';
import Simulator from './Components/Simulator';
import TestChart from './Components/TestChart';


import IntroToStocks from './Components/ModulesPages/IntroToStocks/IntroToStocks';
import StockTradingBasics from './Components/ModulesPages/StockTradingBasics/StockTradingBasics';
import StockResearch from './Components/ModulesPages/StockResearch/StockResearch'
import OptionsStrategies from './Components/ModulesPages/OptionsStrategies/OptionsStrategies'
import ManagePortfolio from "./Components/ModulesPages/ManagePortfolio/ManagePortfolio"
import IntroToOptions from './Components/ModulesPages/IntroToOptions/IntroToOptions'

import Tv from './Features';
import Dashboard from './Tv/dashboard';
import SignUp from './Components/Signup/SignUp';
import TopUpFunds from './Components/TopUpFunds';
import ChartDefault from './Components/Tab-bar/ChartDefault';
import Profile from './Components/Profile';
import Features from "./Features"


function App() {




  const router = createBrowserRouter([

    // {
    //   path: "/trading",
    //   element: <Tv />,
      
    // },
    {
      path: "/",
      element: <Landing />,
      
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      
    },
    {
      path: "/learn",
      element: <ModuleHome />,
      
    },
    {
      path: "/login",
      element: <Login />,
      
    },
    {
      path: "/topup",
      element: <TopUpFunds />,
      
    },
    // {
    //   path: "/dashboard/Simulator",
    //   element: <Simulator />,
      
    // },
{
  path: "/testchart",
  element : <TestChart />
}
,
    // {
    //   path: "/trading",
    //   element: <Tv />,
      
    // },
    {
      path: "/features",
      element: <Features />,
      
    },
    {
      path: "/",
      element: <Landing />,
      
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      
    },
    {
      path: "/learn",
      element: <ModuleHome />,
      
    },
    {
      path: "/introductiontostocks",
      element: <IntroToStocks />,
      
    },
    {
      path: "/introtooptions",
      element: <IntroToOptions />,
      
    },
    {
      path: "/manageportfolios",
      element: <ManagePortfolio />,
      
    },
    {
      path: "/optionsstrategies",
      element: <OptionsStrategies />,
      
    },
    {
      path: "/stockresearch",
      element: <StockResearch />,
      
    },
    {
      path: "/stocktradingbasics",
      element: <StockTradingBasics />,
      
    },
    {
      path: "/signup",
      element: <SignUp />,
      
    },
    {
      path: "/chart",
      element: <ChartDefault />,
      
    },
    {
      path: "/myprofile",
      element: <Profile />,
      
    },
  ]);

  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
