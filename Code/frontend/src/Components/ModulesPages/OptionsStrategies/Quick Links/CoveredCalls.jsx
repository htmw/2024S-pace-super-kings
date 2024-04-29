import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const CoveredCalls = () => {
  const headings = [
    {
      id: "section1",
      title: "What Is a Covered Call?",
    },
    { id: "section2", title: "Key Takeaways" },
    {
      id: "section3",
      title: "Understanding Covered Calls",
    },
    { id: "section4", title: "Maximum Profit and Maximum Loss" },
    { id: "section5", title: "Advantages and Disadvantages of Covered Calls" },
    { id: "section6", title: "When to Use Covered Calls" },
    { id: "section7", title: "When to Avoid Covered Calls" },
    { id: "section8", title: "Example of a Covered Call" },
    { id: "section9", title: "Are Covered Calls Profitable?" },
    { id: "section10", title: "Are Covered Calls Risky?" },
    { id: "section11", title: "Can I Use Covered Calls in My IRA?" },
    { id: "section12", title: "Is There Such a Thing as a Covered Put?" },
    { id: "section13", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">What is a Covered Call?</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    A covered call is a financial transaction where an investor
                    sells call options while owning the underlying security in
                    equivalent amounts. To execute a covered call, an investor
                    with a long position in an asset writes (sells) call options
                    on that same asset, generating income through the option's
                    premium. The long position in the asset acts as the cover,
                    ensuring the seller can deliver the shares if the buyer of
                    the call option decides to exercise.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    A covered call is a popular options strategy used to
                    generate income from options premiums.
                  </p>
                  <p>
                    It involves an investor holding a long position in an asset
                    and then writing call options on that same asset.
                  </p>
                  <p>
                    Covered calls are ideal when investors expect the underlying
                    price to remain relatively stable with only minor increases
                    or decreases.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Covered calls are a neutral strategy, meaning the investor
                    does not expect significant price movement in the underlying
                    stock during the life of the call option. The strategy can
                    be used by investors with a short-term neutral view of the
                    asset, allowing them to generate income from the option
                    premium while holding the underlying stock long.
                  </p>
                  <p>
                    The covered call serves as a short-term hedge and allows
                    investors to earn income from the premiums. However, they
                    forfeit stock gains if the price moves above the option's
                    strike price, obligating them to deliver 100 shares for each
                    contract if the buyer exercises.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    <strong>Maximum Profit: </strong>The premium received for
                    the options sold, plus potential stock appreciation between
                    the current price and the strike price.
                  </p>

                  <p>
                    <strong>Maximum Loss: </strong>The purchase price of the
                    underlying stock, less the premium received. This is because
                    the stock could drop to zero.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    <strong>Pros</strong> <br />
                    Offers a way to earn income from the options premium. <br />
                    Limits potential downside by covering the position with the
                    underlying stock.
                  </p>
                  <p>
                    <strong>Cons</strong>
                    <br />
                    Limits potential gains if the stock price rises
                    significantly. <br />
                    The writer must have enough shares to deliver if the call is
                    exercised.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Covered calls work best when the underlying security has a
                    neutral to slightly bullish outlook, with little expected
                    price movement. This strategy provides steady premium income
                    while retaining the stock in case of a small price increase.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Covered calls may not be ideal if there's a high likelihood
                    of significant price swings. If the price rises
                    unexpectedly, the call writer could miss out on significant
                    gains. If the price falls, the writer could face
                    considerable losses.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Suppose an investor owns shares of a stock currently priced
                    at $25. They can sell a call option with a strike price of
                    $27, earning a premium of $0.75 for each contract. Depending
                    on how the stock price moves, two scenarios may occur:
                  </p>
                  <p>
                    <strong>
                      1.Stock Price Stays Below the Strike Price:{" "}
                    </strong>
                    The option expires worthless, and the writer keeps the
                    premium, plus the underlying stock.
                  </p>
                  <p>
                    <strong>2.Stock Price Exceeds the Strike Price: </strong>The
                    call option is exercised, and the writer must deliver the
                    shares at the strike price, capping the upside. However,
                    they keep the premium and can decide whether to sell or
                    rebuy the shares.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Covered calls can be profitable, offering consistent premium
                    income while retaining the underlying stock. However, they
                    can limit potential gains if the stock price exceeds the
                    strike price by the expiration date.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Covered calls have lower risk compared to other options
                    strategies. They provide income from premiums and offer some
                    downside protection due to the long position in the
                    underlying stock. However, call writers face the risk of
                    missing significant price appreciation if the stock rises
                    beyond the strike price.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    Yes, depending on your IRA custodian and eligibility to
                    trade options, covered calls can be used in IRAs. Covered
                    calls are often employed because they have less risk and can
                    generate income without triggering reportable capital gains.
                  </p>
                </>
              )}
              {heading.id === "section12" && (
                <>
                  <p>
                    Covered puts are less common but theoretically involve
                    selling shares short and then selling a put option to cover
                    the position. A more common strategy involving puts is a
                    "married put," where an investor buys a put option to
                    protect a long position in stock.
                  </p>
                </>
              )}
              {heading.id === "section13" && (
                <>
                  <p>
                    Covered calls offer a strategic way to generate income and
                    hedge positions while providing some protection against
                    downside risk. This strategy is ideal for those with a
                    neutral-to-slightly-bullish outlook on the underlying asset.
                    However, the potential gains are limited, so careful
                    consideration is needed before engaging in this strategy.
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

export default CoveredCalls;
