import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import "../../IntroToStocks/introToStocks.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EssentialOfAnalyzingStock = () => {
  const headings = [
    { id: "section1", title: "Overview" },
    { id: "section2", title: "Key Takeaways" },
    { id: "section3", title: "1.Understand What Stocks Do:" },
    { id: "section4", title: "2.Analyze the Price-to-Earnings (P/E) Ratio:" },
    { id: "section5", title: "3.Consider the Stock's Beta:" },
    { id: "section6", title: "4.Look for Dividends:" },
    { id: "section7", title: "5.Check the Stock Chart:" },
    { id: "section8", title: "Bottom Line" },
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
      <h1 className="stockpagetitle">5 Essentials You Need to Know About Every Stock You Buy</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                  Investing in the stock market may seem straightforward, but successful investing requires careful research, analysis, and strategy. Many retail investors—those who aren't investment professionals—lose money annually. This is often because they don't have the time or resources to research a large number of stocks. If you don't do enough research, losses can occur. However, you can reduce the risk of losses by focusing on five key factors.
                  </p>
                  
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                  Look for the company's price-to-earnings ratio—the current share price relative to its per-share earnings.
                  </p>
                  <p>
                  A company's beta can tell you much risk is involved with a stock compared to the rest of the market.
                  </p>
                  <p>
                  If you want to park your money, invest in stocks with a high dividend.
                  </p>
                  <p>Although reading them can be complicated, look for some of the most simple cues from charts like the stock's price movement.</p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                  Before buying a stock, you must understand the business it represents. Know what the company manufactures, the services it provides, and the countries where it operates. Consider this a first date—you wouldn't meet someone without knowing anything about them. The same principle applies to investing. Use company websites, financial statements, and other resources to learn about a potential investment.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>The P/E ratio is the relationship between a company's market value per share and its earnings per share. This ratio indicates how much investors are willing to pay for each dollar of earnings. A higher P/E ratio might suggest that the company is expected to grow, but it could also mean the stock is overvalued. Compare a company's P/E ratio to others in its sector to determine its relative value.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                  Beta measures a stock's volatility compared to the broader market, typically the S&P 500. A beta above one indicates higher risk and greater price fluctuations, while a beta below one suggests lower risk. High-beta stocks can offer significant returns but require more careful monitoring. Low-beta stocks are generally safer, providing stability and consistent returns.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                  Dividend stocks offer steady income regardless of market fluctuations. Dividends are portions of a company's earnings distributed to shareholders. Companies with a strong track record of paying dividends can be a good choice for investors who prefer a more passive income stream. Sectors like oil and gas, banks, and utilities often have high-dividend stocks.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                  Reading stock charts can be complex, but you can glean useful information by focusing on basic trends. If a chart starts in the lower left and ends in the upper right, it's a positive sign. A downward trend should prompt caution. Avoid stocks with consistently falling charts unless you have a compelling reason to invest in them.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                  Investing requires thorough research, analysis, and strategy. Focus on longer-term strategies with proven success, such as dividend stocks and companies with stable performance. Risky and aggressive trading strategies should be approached with caution unless you have the time and resources to manage them. By considering these five factors, you can improve your chances of making successful investment decisions.
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

export default EssentialOfAnalyzingStock;
