import React from "react";
import "../../IntroToStocks/introToStocks.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WhenToSellAStock = () => {
  const headings = [
    { id: "section1", title: "Timing the Market: Deciding When to Sell Stocks" },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "Mistakes in Judgment" },
    { id: "section4", title: "Quick Profits" },
    { id: "section5", title: "Price Targets" },
    { id: "section6", title: "Technical and Fundamental Analysis" },
    { id: "section7", title: "Company and Market News" },
    { id: "section8", title: "Changing Personal Needs" },
    { id: "section9", title: "Conclusion" },
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
      <ScrollToTop/>
      <Navbar />
      <h1 className="stockpagetitle">6 Reasons to Sell a Stock</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Making money in stocks involves making two critical
                    decisions: when to buy and when to sell. Selling too early
                    could mean missing out on further gains, while selling too
                    late could lead to losses if the stock price falls.
                    Investors have various strategies to determine when it's
                    time to sell a stock. These decisions might be influenced by
                    personal circumstances such as losing a job, planning for
                    retirement, or buying a home.
                  </p>
                </>
              )}

              {heading.id === "section2" && (
                <>
                  <p>
                    Selling stocks can be more challenging than buying them.
                  </p>
                  <p>
                    Both internal and external factors can influence the
                    decision to sell.
                  </p>
                  <p>
                    Emotion and psychological biases can cloud judgment when it
                    comes to stock market investments.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    When investors notice a stock gaining in price, they may
                    impulsively make large purchases without thorough research
                    or considering their financial situation. If they later
                    realize this was a mistake, it's best to sell the stock—even
                    if it results in a loss—rather than risking more significant
                    losses later. Avoid chasing "hot" stocks without proper
                    analysis.{" "}
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Investors sometimes sell stocks after quick price increases
                    to secure gains. However, selling just because a stock has
                    gone up might not always be the right move. The increase
                    could be justified by the company's fundamentals, or it
                    could be driven by speculation or rumors. Before selling,
                    research why the price has increased and decide whether to
                    sell all or part of the position. You can also set a stop
                    order to sell if the stock falls below a specified price.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Traders often use price targets to determine when to sell.
                    If a stock has plummeted and regained its original entry
                    price, it's often a signal to sell. Traders usually have
                    multiple price targets, like entry points or past highs, and
                    selling at these targets can help avoid regrets over missed
                    opportunities.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Technical analysts focus on stock price charts to identify
                    trends and signals. If a stock breaks below a key support
                    level or a multi-year low, it may indicate more declines are
                    ahead, suggesting it's time to sell. Alternatively, if a
                    stock breaks through a significant resistance level, it
                    could be a sign of continued gains, prompting a partial or
                    full sale of the stock.
                  </p>
                  <p>
                    Fundamental analysis looks at a company's financial health.
                    Signs of deteriorating fundamentals, such as reduced
                    earnings, slow revenue growth, increased competition, or
                    higher costs, might suggest it's time to sell. Often, a
                    company's quarterly earnings report provides the first signs
                    of these changes.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Negative news about a company, such as disappointing
                    earnings or lowered guidance, can lead to a sharp drop in
                    stock price. In such cases, investors need to determine
                    whether the problem is temporary or permanent. If a
                    company's bad news affects its sector, it might be worth
                    considering selling other stocks in that sector. Broader
                    market concerns, like overextension, might lead to
                    rebalancing by selling weaker stocks, especially those with
                    high debt.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Investors might sell stocks to rebalance a portfolio,
                    realize losses for tax purposes, or fund other investments
                    like real estate. Life events, such as buying a house,
                    retiring, or funding a child's education, can also prompt
                    stock sales. Younger investors might sell to afford a major
                    purchase, while those nearing retirement may sell to reduce
                    risk by decreasing their equity exposure.{" "}
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Selling stocks involves complex decisions with various
                    contributing factors. Investors need to balance personal
                    needs with broader market trends while avoiding emotional
                    decision-making. Understanding these considerations can help
                    make more informed choices when selling stocks.
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

export default WhenToSellAStock;

// {

//   const headings = [
//     {
//       id: "section1",
//       title: "Understanding the Limitations of Stock Ownership",
//     },
//     { id: "section2", title: "Key Points" },
//     { id: "section3", title: "Misconception 1: I'm the Boss" },
//     {
//       id: "section4",
//       title: "Misconception 2: 'I Get Discounts on Products and Services'",
//     },
//     {
//       id: "section5",
//       title: "Misconception 3: 'I Own the Company's Property'",
//     },
//     { id: "section6", title: "Conclusion" },
//   ];

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   useEffect(() => {
//     if (!token) {
//       // Redirect to login page if token doesn't exist
//       navigate("/login");
//     }
//   }, [token, navigate]);

//   return (
//         <div>
//          <Navbar />
//          <h1 className="stockpagetitle">The Stock Market</h1>
//         <div className="tableContent-mainContainer">

//           <TableOfContent headings={headings} />

//           <div className="content">
//             {headings.map((heading, index) => (
//               <div key={index} id={heading.id} className="section">
//                 <h2>{heading.title}</h2>
//                 {heading.id === "section1" && (
//                   <>
//                     <p>
//                       The stock market involves the collective trading of stocks
//                       and their derivatives.
//                     </p>
//                     <p>
//                       It is central to modern economies, allowing companies to
//                       raise significant funds for various purposes.
//                     </p>
//                     <p>
//                       Companies listed on stock exchanges must be public, meaning
//                       their shares are open for trading by anyone. Public
//                       companies must adhere to strict reporting and transparency
//                       rules.
//                     </p>
//                     <p>
//                       Stocks are sold to a range of investors, from institutions
//                       and high-net-worth individuals to people with modest means.
//                       Investors buy stocks for income, to sell later at a profit,
//                       or to gain voting rights in company decisions.
//                     </p>
//                     <p>
//                       The Securities and Exchange Commission (SEC) and state
//                       regulators oversee the U.S. stock market.
//                     </p>
//                     <p>
//                       Stock prices fluctuate due to supply and demand, company
//                       performance, economic conditions, and investor sentiment,
//                       among other factors.
//                     </p>
//                   </>

//                 )},
//                 </div>
//                 ))
//             }
//           </div>
//           </div>

//         </div>
//       );
// }
