import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";



const WhatIsEtf = () => {
  const headings = [
    { id: "section1", title: "Introduction to Exchange-Traded Funds (ETFs)" },
    { id: "section2", title: "Key Aspects of ETFs" },
    { id: "section3", title: "Types of ETFs" },
    { id: "section4", title: "How to Buy ETFs" },
    { id: "section5", title: "Popular ETFs" },
    { id: "section6", title: "Diversification with ETFs" },
    { id: "section7", title: "What Was the First Exchange-Traded Fund (ETF)?" },
    { id: "section8", title: "How Is an ETF Different From an Index Fund?" },
    { id: "section9", title: "Do ETFs Provide Diversity?" },
    { id: "section10", title: "The Bottom Line" },
  ];

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      // Redirect to login page if token doesn't exist
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <h1 className="stockpagetitle">What is an ETF?</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    An exchange-traded fund (ETF) is a pooled investment
                    security that trades on an exchange like individual stocks.
                    ETFs can track various benchmarks, including stock indices,
                    commodities, or specific investment strategies, offering
                    flexibility and diversity to investors. They are popular
                    because they provide a cost-effective way to gain exposure
                    to various assets, often with lower fees and increased
                    liquidity compared to mutual funds.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    <strong>Dividends and Taxes: </strong>ETFs allow investors
                    to benefit from stock price fluctuations and dividends paid
                    by companies. This feature provides an additional income
                    stream for ETF shareholders. ETFs are typically more
                    tax-efficient than mutual funds because most transactions
                    occur on an exchange, reducing the need for fund sponsors to
                    redeem or issue new shares, which would trigger taxable
                    events.
                  </p>
                  <p>
                    <strong>Creation and Redemption: </strong>ETFs manage their
                    share supply through a process called creation and
                    redemption, involving authorized participants (APs). APs can
                    exchange securities with the ETF sponsor for new ETF shares
                    or redeem ETF shares for the underlying securities,
                    maintaining liquidity and helping keep ETF prices aligned
                    with their net asset value (NAV).
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    <strong>Passive ETFs: </strong>Aim to track a broader index,
                    providing diversified exposure.
                  </p>
                  <p>
                    <strong>Actively Managed ETFs:</strong>Portfolio managers
                    select securities, offering flexibility but often at a
                    higher cost.
                  </p>
                  <p>
                    <strong>Bond ETFs: </strong>Designed for income generation
                    with various bond types.
                  </p>
                  <p>
                    <strong>Stock ETFs: </strong>Track specific industries or
                    sectors, like technology or healthcare.
                  </p>
                  <p>
                    <strong>Commodity ETFs:</strong> Invest in commodities like
                    gold or oil, offering a hedge against market downturns.
                  </p>
                  <p>
                    <strong>Currency ETFs: </strong>Focus on currency pairs for
                    speculation or portfolio diversification.
                  </p>
                  <p>
                    <strong>Bitcoin ETFs:</strong>Offer exposure to Bitcoin's
                    price movements through spot or futures-based ETFs.
                  </p>
                  <p>
                    <strong>Inverse ETFs:</strong>Benefit from stock declines by
                    shorting stocks through derivatives
                  </p>
                  <p>
                    <strong>Leveraged ETFs: </strong>Aim to return multiples of
                    the underlying investments using leverage.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    ETFs can be purchased through online brokers, traditional
                    broker-dealers, and retirement accounts. Many platforms
                    offer commission-free trading, making ETFs accessible to
                    investors. When buying ETFs, consider factors like expense
                    ratios, which represent the cost to operate and manage the
                    fund.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>SPDR S&P 500 (SPY): Tracks the S&P 500 Index.</p>
                  <p>
                    iShares Russell 2000 (IWM): Tracks the Russell 2000
                    small-cap index.
                  </p>
                  <p>
                    Invesco QQQ (QQQ): Tracks the Nasdaq 100 Index, primarily
                    technology stocks.
                  </p>
                  <p>
                    SPDR Dow Jones Industrial Average (DIA): Represents the Dow
                    Jones Industrial Average.
                  </p>
                  <p>
                    Sector ETFs: Focus on individual industries, like energy
                    (XLE) or biotechnology (BBH).
                  </p>
                  <p>
                    Commodity ETFs: Represent commodities like gold (GLD) or
                    crude oil (USO).
                  </p>
                  <p>
                    Country ETFs: Track primary stock indexes in foreign
                    countries, like China (MCHI) or Brazil (EWZ).
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    ETFs offer a convenient way to diversify a portfolio by
                    holding a basket of securities, reducing risk. However, some
                    ETFs are highly concentrated, so investors should evaluate
                    their holdings for optimal diversification. Diversification
                    helps reduce unsystematic risk, while systematic risk
                    (affecting the entire market) can't be entirely avoided.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    The SPDR S&P 500 ETF (SPY), launched by State Street Global
                    Advisors on Jan. 22, 1993, is considered the first ETF.
                    However, some precursors, like Index Participation Units on
                    the Toronto Stock Exchange (TSX), appeared in 1990.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    An index fund typically refers to a mutual fund tracking an
                    index. An index ETF also tracks an index but is more
                    cost-effective and liquid than a mutual fund. ETFs can be
                    bought through brokers and trade throughout the day, while
                    mutual funds only trade once daily.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Nearly all ETFs offer diversification relative to individual
                    stock purchases. However, some ETFs are highly concentrated,
                    either in the number of different securities they hold or
                    the weighting of those securities. For example, a heavily
                    concentrated ETF may offer less diversification than an ETF
                    with fewer total securities but a broader asset
                    distribution.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Exchange-traded funds offer a cost-effective way to gain
                    exposure to a wide array of securities with a limited
                    budget. They are a flexible tool for building a diversified
                    portfolio and come with lower costs than mutual funds.
                    However, investors should be aware of additional expenses,
                    such as expense ratios, and understand that ETFs do not
                    eliminate all risks, especially during significant market
                    downturns or periods of high volatility.
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsEtf;
