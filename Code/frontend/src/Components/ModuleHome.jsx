import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import "./moduleHome.css"

const ModuleHome = () => {
  return (
    <>
     <Navbar />
    <div className="modules-title">
    <h1 style={{fontSize:'2.5rem'}}>Learning Modules</h1>
    </div>
    <div className="modules-row-1">

        <div className="module-1">
            <div className="num-Line"><div className="num"><span>1</span></div><div className="line1"></div></div>
            <div className="module-head"><Link to='/introductiontostocks'><h3>Introduction to Stock</h3></Link></div>
            <div className="smalltext"><span>5 min read</span></div>
            <div className="span"><p>Discover the essential role of the stock market in securing financial stability. Learn its basics, operations, and intermediaries in this module, providing a comprehensive foundation for beginners venturing into the world of stock trading.</p></div>
            <div className="view-module-btn"><Link to="/introductiontostocks"><span>View module</span></Link></div>
        </div>

        <div className="module-1">
            <div className="num-Line"><div className="num"><span>2</span></div><div className="line2"></div></div>
            <div className="module-head"><Link to='/stocktradingbasics'><h3>Stock Trading Basics</h3></Link></div>
            <div className="smalltext"><span className='smalltext'>5 min read</span></div>
            <div className="span"><p>
            Stock trading basics involve buying and selling shares of companies. Investors aim to profit from price changes. Key terms include stocks, shares, and dividends. Understanding market trends, company fundamentals, and effective risk management is crucial for success.</p></div>
            <div className="view-module-btn" ><Link to="/stocktradingbasics"><span>View module</span></Link></div>
        </div>

        <div className="module-1">
            <div className="num-Line"><div className="num"><span>3</span></div><div className="line3"></div></div>
            <div className="module-head"><Link to='/manageportfolios'><h3>Managing a Portfolio</h3></Link></div>
            <div className="smalltext"><span>5 min read</span></div>
            <div className="span"><p>

            Effectively managing your stock portfolio involves diversification, risk assessment, and periodic review. Balancing high-risk, high-reward investments with stable assets can mitigate losses. Regularly reassessing your portfolio ensures alignment with financial goals and risk tolerance.</p></div>
            <div className="view-module-btn"><Link to="/manageportfolios"><span>View module</span></Link></div>
        </div>
    </div>

    <div className="modules-row-1">

<div className="module-1">
    <div className="num-Line"><div className="num"><span>4</span></div><div className="line4"></div></div>
    <div className="module-head"><Link to='/stockresearch'><h3>Stock Research</h3></Link></div>
    <div className="smalltext"><span>5 min read</span></div>
    <div className="span"><p>
    Stock research is crucial for investment decisions, analyzing company financials, market trends, and industry outlooks. Fundamental analysis evaluates intrinsic value, while technical analysis studies price movements, aiding investors in identifying opportunities and managing risks effectively.</p></div>
    <div className="view-module-btn"><Link to="/stockresearch"><span>View module</span></Link></div>
</div>

<div className="module-1">
    <div className="num-Line"><div className="num"><span>5</span></div><div className="line5"></div></div>
    <div className="module-head"><Link to='/introtooptions'><h3>Introduction to Options</h3></Link></div>
    <div className="smalltext"><span className='smalltext'>5 min read</span></div>
    <div className="span"><p>
Options trading offers investors the right, but not the obligation, to buy or sell assets at a predetermined price within a specified timeframe. Calls allow buying, puts allow selling. Understanding options strategies enhances flexibility and risk management in trading.</p></div>
    <div className="view-module-btn" ><Link to="/introtooptions"><span>View module</span></Link></div>
</div>

<div className="module-1">
    <div className="num-Line"><div className="num"><span>6</span></div><div className="line6"></div></div>
    <div className="module-head"><Link to='/optionsstrategies'><h3>Options Strategies</h3></Link></div>
    <div className="smalltext"><span>5 min read</span></div>
    <div className="span"><p>Options strategies involve various combinations of buying and selling options contracts to achieve specific investment goals. Strategies like covered calls, protective puts, and straddles aim to capitalize on market movements while managing risk effectively.</p></div>
    <div className="view-module-btn"><Link to="/optionsstrategies"><span>View module</span></Link></div>
</div>
</div>

    </>
  )
}

export default ModuleHome