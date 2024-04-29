import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const CreditDebitSpreads = () => {
  const headings = [
    {
      id: "section1",
      title: "Credit Spread vs. Debit Spread: An Overview",
    },
    { id: "section2", title: "Key Takeaways" },
    {
      id: "section3",
      title: "Credit Spreads",
    },
    { id: "section4", title: "Example of a Credit Spread" },
    { id: "section5", title: "Debit Spreads" },
    { id: "section6", title: "Example of a Debit Spread" },
    { id: "section7", title: "Premiums" },
    { id: "section8", title: "Trading Environments" },
    { id: "section9", title: "Potential for Loss" },
    { id: "section10", title: "Use of Margin" },
    { id: "section11", title: "Time Decay" },
    {
      id: "section12",
      title: "When to Use a Credit Spread vs. a Debit Spread",
    },
    { id: "section13", title: "Are Debit Spreads Profitable?" },
    {
      id: "section14",
      title: "How Much Money Can You Lose on a Credit Spread?",
    },
    { id: "section15", title: "Are Debit Spreads Safer Than Credit Spreads?" },
    { id: "section16", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">Credit Spreads and Debit Spreads</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Credit spreads and debit spreads are options strategies that
                    involve vertical spreads, where traders buy and sell options
                    of the same class with different strike prices but the same
                    expiration date. Although similar in structure, the main
                    difference between these two strategies is whether there's a
                    net receipt or a net payment of premiums.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    An options spread involves buying and selling options on the
                    same underlying asset.
                  </p>
                  <p>
                    Credit spreads result in a net receipt of premiums, while
                    debit spreads involve a net payment.
                  </p>
                  <p>
                    Credit spreads are ideal for periods of high implied
                    volatility, while debit spreads are best for low volatility.
                  </p>
                  <p>
                    Credit spreads involve selling a high-premium option and
                    buying a low-premium one, whereas debit spreads involve
                    buying a high-premium option and selling a low-premium one.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    A credit spread involves writing (selling) a high-premium
                    option while simultaneously buying a lower-premium option.
                    This strategy results in a credit to the trader's or
                    investor's account due to the net premium received. The
                    maximum profit for credit spreads is limited to the premium
                    received, while the loss potential can be higher than the
                    initial premium.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Suppose a trader writes a call option with a strike price of
                    $30 for $3 and buys a call option with a strike price of $40
                    for $1, creating a net premium of $200. The credit spread
                    strategy profits when the spreads narrow.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    A debit spread involves buying a higher-premium option and
                    simultaneously selling a lower-premium option, resulting in
                    a debit from the trader's or investor's account. This
                    strategy is commonly used by options trading beginners and
                    helps offset costs associated with long options positions.
                    The maximum loss for debit spreads is limited to the premium
                    paid, while profits can be higher if the spreads widen.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Suppose a trader buys a put option with a strike price of
                    $20 for $5 and sells a put option with a strike price of $10
                    for $1. The net payment is $400. If the trade is out of the
                    money, the maximum loss is limited to $400.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Credit spreads involve net receipts of premiums, while debit
                    spreads involve net payments. The credit spread generates a
                    premium by writing a higher-premium option, while debit
                    spreads result from buying a higher-premium option and
                    selling a lower-premium one.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Credit spreads work in various trading environments,
                    suitable for both high and low implied volatility. Debit
                    spreads are typically used in low-volatility environments.
                    Generally, credit spreads are used when implied volatility
                    is above 50%, while debit spreads are used when implied
                    volatility is below 50%.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Credit spreads carry a higher potential for loss compared to
                    debit spreads, where the maximum loss is limited to the net
                    premium paid.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Credit spreads usually require a margin account, while debit
                    spreads do not.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    Credit spreads benefit from time decay (the decline in the
                    value of an option with time), while debit spreads are
                    adversely affected by it.
                  </p>
                </>
              )}
              {heading.id === "section12" && (
                <>
                  <p>
                    Credit spreads work best when the implied volatility is
                    higher than 50%, indicating more significant price swings.
                    Debit spreads are preferred when implied volatility is below
                    50%, suggesting a more stable market environment.
                  </p>
                </>
              )}
              {heading.id === "section13" && (
                <>
                  <p>
                    Debit spreads can be profitable when stock prices move in
                    the expected direction. To achieve the maximum profit, the
                    security must expire at or above the strike price.
                  </p>
                </>
              )}
              {heading.id === "section14" && (
                <>
                  <p>
                    The maximum loss on a credit spread is the difference
                    between the strike prices of the options, minus the net
                    receipt of premiums.
                  </p>
                </>
              )}
              {heading.id === "section15" && (
                <>
                  <p>
                    Debit spreads are safer because they limit the risk to the
                    net payment premium paid. Credit spreads can carry a higher
                    risk, with potentially unlimited loss if the underlying
                    security price moves against the trader.
                  </p>
                </>
              )}
              {heading.id === "section16" && (
                <>
                  <p>
                    Credit and debit spreads are versatile options strategies
                    that provide traders with different ways to generate income
                    and manage risk. Credit spreads result in net premium
                    receipts, while debit spreads involve net payments. Both
                    strategies can be effective when used in the appropriate
                    market environment. Before using either strategy, traders
                    should understand the risks and benefits and consider
                    seeking professional advice.
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

export default CreditDebitSpreads;
