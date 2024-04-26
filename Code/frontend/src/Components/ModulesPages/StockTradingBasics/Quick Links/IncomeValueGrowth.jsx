import React from "react";
import "../../IntroToStocks/introToStocks.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const IncomeValueGrowth = () => {
  const headings = [
    { id: "section1", title: "Growth Stock" },
    { id: "section2", title: "Example of Growth Stock" },
    { id: "section3", title: "Value Stock" },
    { id: "section4", title: "Income Stock" },
    { id: "section5", title: "Example of Income Stocks" },
    { id: "section6", title: "Finding Stocks in These Categories" },
    { id: "section7", title: "Conclusion" },
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
      <h1 className="stockpagetitle">Income Value Growth</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Growth stocks represent companies with significant potential
                    for expansion, typically growing faster than the broader
                    market. These companies usually reinvest their revenue to
                    fuel further growth. While growth stocks are found across
                    all market sectors, they are particularly common in
                    technology, alternative energy, and biotechnology.
                  </p>
                  <p>
                    Growth stocks are often associated with newer companies
                    offering innovative products expected to have a major impact
                    on the market. However, established companies with effective
                    business models can also be growth stocks, having
                    capitalized on demand for their products. Despite their
                    potential for high returns, growth stocks often involve
                    greater risk due to their volatility and smaller size.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Amazon.com Inc (AMZN) continues to innovate and expand its
                    reach, attracting customers from other retail companies. As
                    of October 22, 2021, its trailing P/E ratio was 58,
                    reflecting its growth potential compared to the S&P 500's
                    trailing P/E ratio of 26.9.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Value stocks refer to companies trading at prices lower than
                    what their financials or technical indicators suggest they
                    should be. These stocks might offer high dividend payouts or
                    have low price-to-earnings or price-to-book ratios. Their
                    prices could also be suppressed due to external factors
                    unrelated to the company's actual performance.{" "}
                  </p>
                  <p>
                    A well-managed company’s stock price might drop if its CEO
                    is involved in a personal scandal. Savvy investors might see
                    this as an opportunity to buy, expecting that the stock will
                    rebound once the public forgets about the incident.
                  </p>
                  <p>
                    What qualifies as a value stock depends on an investor's
                    perspective. These stocks usually represent larger, more
                    established companies, which may make them seem less risky.
                    However, there's no guarantee that their prices will bounce
                    back to previous levels.
                  </p>
                </>
              )}
              {/* {heading.id === "section4" && (
                <>
                  <p>
                    Value stocks refer to companies trading at prices lower than
                    what their financials or technical indicators suggest they
                    should be. These stocks might offer high dividend payouts or
                    have low price-to-earnings or price-to-book ratios. Their
                    prices could also be suppressed due to external factors
                    unrelated to the company's actual performance.{" "}
                  </p>
                  <p>
                    A well-managed company’s stock price might drop if its CEO
                    is involved in a personal scandal. Savvy investors might see
                    this as an opportunity to buy, expecting that the stock will
                    rebound once the public forgets about the incident.
                  </p>
                  <p>
                    What qualifies as a value stock depends on an investor's
                    perspective. These stocks usually represent larger, more
                    established companies, which may make them seem less risky.
                    However, there's no guarantee that their prices will bounce
                    back to previous levels.
                  </p>
                </>
              )} */}
              {heading.id === "section4" && (
                <>
                  <p>
                    Investors seeking income stocks are generally looking to
                    boost their fixed-income portfolios with dividend yields
                    higher than those from Treasury securities or certificates
                    of deposit (CDs). There are two primary types of income
                    stocks: utility stocks and preferred stocks.
                  </p>
                  <p>
                    <strong>Utility Stocks: </strong>Typically stable in price,
                    these stocks often pay competitive dividends.
                  </p>
                  <p>
                    <strong>Preferred Stocks: </strong>These hybrids behave more
                    like bonds, with features like calls or puts, and usually
                    offer attractive yields.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Investors seeking income stocks are generally looking to
                    boost their fixed-income portfolios with dividend yields
                    higher than those from Treasury securities or certificates
                    of deposit (CDs). There are two primary types of income
                    stocks: utility stocks and preferred stocks.
                  </p>
                  <p>
                    <strong>Utility Stocks: </strong>Typically stable in price,
                    these stocks often pay competitive dividends.
                  </p>
                  <p>
                    <strong>Preferred Stocks: </strong>These hybrids behave more
                    like bonds, with features like calls or puts, and usually
                    offer attractive yields.
                  </p>
                  <p>
                    Although income stocks are seen as a safer option, they can
                    still lose value if interest rates rise.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    AT&T (T) is financially solid with a reasonable debt level
                    and paid an annual dividend yield of 8.16% as of October 22,
                    2021.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    There's no single way to discover growth, value, or income
                    stocks. Growth stock seekers can explore investing websites
                    or bulletin boards for lists of growth companies and then
                    conduct their own research. Income stock investors can
                    calculate dividend yields and assess associated risks. Many
                    stock screening tools allow investors to search by specific
                    criteria, such as dividend yields or financial ratios.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Stocks can offer returns through growth, undervaluation, or
                    dividends. Some stocks, like AT&T, combine these factors,
                    indicating that dividends can significantly impact total
                    returns. Understanding the distinct characteristics of
                    growth, value, and income stocks helps investors build
                    portfolios that align with their goals and risk tolerance.{" "}
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

export default IncomeValueGrowth;
