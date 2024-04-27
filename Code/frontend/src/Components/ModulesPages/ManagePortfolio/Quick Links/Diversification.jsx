import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const Diversification = () => {
  const headings = [
    { id: "section1", title: "Introduction to Diversification" },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "Understanding the Concept" },
    { id: "section4", title: "Diversifying Across Sectors and Industries" },
    { id: "section5", title: "Diversifying Across Companies" },
    { id: "section6", title: "Diversifying Across Asset Classes" },
    { id: "section7", title: "Diversifying Across Borders" },
    { id: "section8", title: "Diversifying Across Time Frames" },
    { id: "section9", title: "Investors Face Two Main Types of Risk" },
    { id: "section10", title: "Diversification Benefits and Challenges" },
    { id: "section11", title: "Conclusion" },
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
      <h1 className="stockpagetitle">Diversification</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Diversification is the process of spreading investments
                    across different asset classes, industries, and geographic
                    regions to reduce risk in a portfolio. The goal is to hold a
                    variety of investments so that poor performance in one area
                    can be offset by gains in another, leading to more stable
                    returns. By diversifying, investors aim to include assets
                    that do not move in the same direction, thereby reducing the
                    portfolio's overall volatility.
                  </p>
                  <p>
                    Many investment experts agree that diversification is
                    crucial for achieving long-term financial goals while
                    minimizing risk. Here's an exploration of why
                    diversification is essential and how to implement it in your
                    investment portfolio.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Diversification helps mitigate risk by spreading investments
                    across various asset classes, industries, and other
                    categories.
                  </p>
                  <p>
                    Systematic risk affects the entire market and can't be
                    avoided, while unsystematic risk, specific to industries or
                    companies, can be reduced through diversification.
                  </p>
                  <p>
                    Diversification involves choosing different assets to invest
                    in, but it can also be achieved by selecting index funds
                    that contain a variety of holdings.
                  </p>
                  <p>
                    A diversified portfolio may offer better opportunities, more
                    enjoyable investment research, and higher risk-adjusted
                    returns.
                  </p>
                  <p>
                    Balancing a diversified portfolio may be complex and
                    expensive, and it might lead to lower returns due to risk
                    mitigation.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Consider a portfolio that includes only airline stocks. If
                    airline-related news or events negatively impact the
                    industry, the entire portfolio could suffer. However, by
                    including other types of investments, such as railway
                    stocks, investors can offset the losses from one sector with
                    gains from another. This strategy helps balance risk and is
                    the essence of diversification.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    To diversify across sectors, you spread investments across
                    various industries, reducing risk associated with a single
                    industry. For example, by diversifying from airline stocks
                    to other transportation-related stocks, investors can avoid
                    the impact of industry-specific events.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Investors can also diversify within a sector by investing in
                    multiple companies. This mitigates company-specific risks,
                    such as leadership changes or unique challenges. For
                    example, investing in more than one airline company can
                    reduce risk if something affects one specific company.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Diversification isn't limited to stocks; it also involves
                    other asset classes like bonds, commodities, and real
                    estate. Different assets react differently to market
                    conditions, so diversifying across asset classes helps
                    balance the portfolio against broader risks. Alternative
                    assets, like real estate or cryptocurrencies, can further
                    diversify a portfolio.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Investing across geographic regions can reduce risks related
                    to political instability or regional economic downturns. By
                    diversifying internationally, investors can avoid being
                    overly dependent on a single country's market performance.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Consider the holding period of various investments.
                    Longer-term assets like bonds carry more risk but often
                    yield higher returns. Diversifying across time frames adds
                    another layer of risk management to the portfolio.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    <strong>Systematic Risk: </strong>This is market-wide risk
                    caused by factors like inflation, interest rates, and
                    geopolitical events. It can't be diversified away.
                  </p>
                  <p>
                    <strong>Unsystematic Risk: </strong>This is specific to a
                    company or industry, such as business or financial risks,
                    and can be mitigated through diversification.
                  </p>
                  <p>
                    Diversifying aims to reduce unsystematic risk by spreading
                    investments across different asset classes and industries.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Diversification provides several benefits, including reduced
                    risk and more stable returns. It helps preserve capital,
                    especially for older investors, and can improve
                    risk-adjusted returns. Diversification can also lead to
                    better opportunities by exposing investors to different
                    sectors and may make investing more enjoyable by encouraging
                    research into new areas
                  </p>
                  <p>
                    However, diversification has potential downsides. It can
                    lead to lower returns, as a diversified portfolio avoids
                    concentrated positions in high-performing stocks or
                    industries. It may also be more complicated and expensive to
                    manage, with higher transaction costs and additional tax
                    considerations. Additionally, diversification may not
                    protect against all risks, such as market-wide downturns or
                    events like the COVID-19 pandemic.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    Diversification is a crucial investment strategy that helps
                    manage risk and reduce portfolio volatility. It involves
                    spreading investments across various assets, industries, and
                    regions. However, no level of diversification can eliminate
                    risk entirely, and it might result in lower returns compared
                    to a concentrated portfolio. The key is to find a balance
                    between risk and return, allowing you to achieve your
                    financial goals while managing your risk exposure
                    effectively.
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

export default Diversification;
