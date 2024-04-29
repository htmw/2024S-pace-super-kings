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
import StockMarket from './Components/ModulesPages/IntroToStocks/Quick Links/StockMarket';
import StockMarketWork from './Components/ModulesPages/IntroToStocks/Quick Links/StockMarketWork';
import KnowTheStockExchanges from './Components/ModulesPages/IntroToStocks/Quick Links/KnowTheStockExchanges';
import HowToBuySell from './Components/ModulesPages/IntroToStocks/Quick Links/HowToBuySell';
import OwningAStockMeans from './Components/ModulesPages/IntroToStocks/Quick Links/OwningAStockMeans';
import WhenToSellAStock from './Components/ModulesPages/StockTradingBasics/Quick Links/WhenToSellAStock';
import BasicsOfOrderType from './Components/ModulesPages/StockTradingBasics/Quick Links/BasicsOfOrderType';
import ShortSell from './Components/ModulesPages/StockTradingBasics/Quick Links/ShortSell';
import IncomeValueGrowth from './Components/ModulesPages/StockTradingBasics/Quick Links/IncomeValueGrowth';
import InvestingVTrading from './Components/ModulesPages/StockTradingBasics/Quick Links/InvestingVTrading';
import InvestingAnIntro from './Components/ModulesPages/ManagePortfolio/Quick Links/InvestingAnIntro';
import WhatIsEtf from './Components/ModulesPages/ManagePortfolio/Quick Links/WhatIsEtf';
import Diversification from './Components/ModulesPages/ManagePortfolio/Quick Links/Diversification';
import MeasuringInvestmentReturns from './Components/ModulesPages/ManagePortfolio/Quick Links/MeasuringInvestmentReturns';
import FundamntalAnalysis from './Components/ModulesPages/StockResearch/Quick Links/FundamntalAnalysis';
import EssentialOfAnalyzingStock from './Components/ModulesPages/StockResearch/Quick Links/EssentialOfAnalyzingStock';
import HowToBecomeAnalyst from './Components/ModulesPages/StockResearch/Quick Links/HowToBecomeAnalyst';
import StockFundamentals from './Components/ModulesPages/StockResearch/Quick Links/StockFundamentals';
import BasicOfOptionsPrices from './Components/ModulesPages/IntroToOptions/Quick Links/BasicOfOptionsPrices';
import OptionProfitability from './Components/ModulesPages/IntroToOptions/Quick Links/OptionProfitability';
import EssentialOptionTradingGuide from './Components/ModulesPages/IntroToOptions/Quick Links/EssentialOptionTradingGuide';
import KmowMoreAboutOptions from './Components/ModulesPages/IntroToOptions/Quick Links/KmowMoreAboutOptions';


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
    // /////////////////////////////////////// Learining Modules ////////////////////////////////
   
    // **************************************** introduction to stocks quick links *****************************
    {
      path: "/stockmarket",
      element: <StockMarket />,
    },
    {
      path: "/marketwork",
      element: <StockMarketWork />,
    },
    {
      path: "/stockexchanges",
      element: <KnowTheStockExchanges />,
    },
    {
      path: "/buysell",
      element: <HowToBuySell />,
    },
    {
      path: "/owningstocks",
      element: <OwningAStockMeans />,
    },
  //  ***************************************** Basics of Stock Trading (quick links) *****************************
  {
    path: "/whentosellstock",
    element: <WhenToSellAStock />,
  },
  {
    path: "/basicsofordertype",
    element: <BasicsOfOrderType />,
  },
  {
    path: "/shortselling",
    element: <ShortSell />,
  },
  {
    path: "/incomevaluegrowth",
    element: <IncomeValueGrowth />,
  },
  {
    path: "/investingvstrading",
    element: <InvestingVTrading />,
  },
  // **************************************** Manage Portfolio(Quick Links)************************
  {
    path: "/investingintro",
    element: <InvestingAnIntro />,
  },
  {
    path: "/etf",
    element: <WhatIsEtf />,
  },
  {
    path: "/diversification",
    element: <Diversification />,
  },
  {
    path: "/measuringreturns",
    element: <MeasuringInvestmentReturns />,
  },

// *************************************** Stock Research ****************************************

{
  path: "/fundamentalanalysis",
  element: <FundamntalAnalysis />,
},
{
  path: "/essentialofanalyzingstock",
  element: <EssentialOfAnalyzingStock />,
},
{
  path: "/howtobecomeanalyst",
  element: <HowToBecomeAnalyst />,
},
{
  path: "/stockfundamentals",
  element: <StockFundamentals />,
},
// //************************************* Intro to Options **************************************** */
{
  path: "/basicofoptionprices",
  element: <BasicOfOptionsPrices />,
},
{
  path: "/optionprofitability",
  element: <OptionProfitability />,
},
{
  path: "/essentialoptiontradingguide",
  element: <EssentialOptionTradingGuide />,
},
{
  path: "/knowmoreaboutoptions",
  element: <KmowMoreAboutOptions />,
},


]);

  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
