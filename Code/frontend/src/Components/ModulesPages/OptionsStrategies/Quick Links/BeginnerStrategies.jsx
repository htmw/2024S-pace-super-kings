import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const BeginnerStrategies = () => {
  const headings = [
    {
      id: "section1",
      title: "How to Trade Options in 5 Steps",
    },
    { id: "section2", title: "Step 1: Assess Your Readiness" },
    {
      id: "section3",
      title: "Step 2: Choose a Broker and Get Approved to Trade Options",
    },
    { id: "section4", title: "Step 3: Create a Trading Plan" },
    { id: "section5", title: "Step 4: Understand the Tax Implications" },
    {
      id: "section6",
      title: "Step 5: Continuous Learning and Risk Management",
    },
    { id: "section7", title: "Key Takeaways" },
    { id: "section8", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">How To Trade Stock Options</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Options trading can be an effective way to diversify your
                    investment strategy, but it requires a solid understanding
                    of the market, risk management, and specific strategies.
                    Here are the five crucial steps to start trading options:
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Options trading demands a good grasp of market trends, risk
                    management, and volatility. Before diving into it, evaluate
                    your financial health, risk tolerance, and knowledge of
                    options. Consider your investment goals and determine how
                    much time you can dedicate to learning and trading options.
                    Ensure you're honest about your risk appetite and ability to
                    withstand potential losses.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Choosing the right broker is essential. Look for a broker
                    with a platform that supports options trading, offers
                    reasonable fees, provides educational resources, and has
                    excellent customer service. Brokers typically require
                    approval for options trading, so you'll need to fill out an
                    options approval form detailing your financial situation,
                    trading experience, and understanding of options strategies.
                    Approval levels vary, ranging from basic covered calls to
                    advanced strategies like straddles and iron condors.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Develop a comprehensive trading plan that includes your
                    goals, the types of options strategies you'll use, and risk
                    management techniques. Consider paper trading (simulated
                    trading) to test your strategies without risking real money.
                    Your plan should detail your entry and exit criteria, as
                    well as the specific options strategies you plan to execute.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Options trading has unique tax considerations. The Internal
                    Revenue Service (IRS) treats different options strategies
                    differently, depending on outcomes and holding periods. It's
                    crucial to understand the tax implications for your specific
                    trading activities. Consulting a tax professional can help
                    you navigate these complexities and avoid unexpected tax
                    liabilities.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Options trading is dynamic, with evolving strategies and
                    market conditions. Stay informed through continuous
                    learning, whether by reading financial literature, attending
                    courses, or consulting with experienced traders. Risk
                    management is key—use stop-loss orders, diversify your
                    trades, and avoid overcommitting to any single position.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Options trading can be risky and complex, but it offers
                    various strategies to protect against losses and hedge
                    market risk.
                  </p>
                  <p>
                    Basic strategies such as long calls, long puts, covered
                    calls, protective puts, and straddles can be used by novice
                    investors.
                  </p>
                  <p>
                    Options are derivatives that give buyers the right (but not
                    the obligation) to buy or sell a security at a specific
                    price in the future.
                  </p>
                  <p>
                    The risks involved in options trading require careful
                    planning and risk management.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Options trading can be an exciting and profitable venture,
                    but it requires a thorough understanding of the associated
                    risks and strategies. Before trading options, ensure you
                    have a clear trading plan, understand the tax implications,
                    and are committed to continuous learning and risk
                    management. Whether you're using basic strategies like
                    covered calls and long puts or more advanced spreads, make
                    sure you start with a broker that aligns with your trading
                    needs and risk
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

export default BeginnerStrategies;
