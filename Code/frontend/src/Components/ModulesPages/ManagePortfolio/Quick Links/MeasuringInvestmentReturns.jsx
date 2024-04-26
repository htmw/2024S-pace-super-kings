import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const MeasuringInvestmentReturns = () => {
  const headings = [
    { id: "section1", title: "Understanding Portfolio Investment Returns" },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "Calculating Returns for a Single Investment" },
    { id: "section4", title: "Calculating Returns for an Entire Portfolio" },
    { id: "section5", title: "Time-Weighted Returns (TWR)" },
    { id: "section6", title: "Money-Weighted Returns (MWR)" },
    { id: "section7", title: "Additional Factors to Consider" },
    { id: "section8", title: "Holding Period Return" },
    { id: "section9", title: "Adjusting for Cash Flows" },
    { id: "section10", title: "Annualizing Returns" },
    { id: "section11", title: "Example of Calculating Portfolio Returns" },
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
      <h1 className="stockpagetitle">Measuring Investment Returns</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Investing can seem intimidating due to the constantly
                    changing financial landscape. However, with a basic
                    understanding of the principles and the various asset
                    classes, you can achieve significant returns over time. A
                    key part of investing is knowing how to calculate your
                    portfolio's investment returns. This process involves
                    understanding your assets' current value compared to their
                    initial value, including dividends or interest.
                    Understanding your potential returns is essential, as it
                    helps you gauge risks, market conditions, and the time
                    required for your investments to yield results.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    To calculate investment returns, you need to know the
                    initial cost and the current value of each asset.
                  </p>
                  <p>
                    Calculating returns for a single investment provides insight
                    into individual asset performance, guiding your focus on
                    profitable or underperforming assets.
                  </p>
                  <p>
                    Calculating returns for an entire portfolio offers a broader
                    perspective on your investment strategy's effectiveness,
                    helping you decide whether to diversify or manage risk
                    differently.
                  </p>
                  <p>
                    Time-weighted returns (TWR) and money-weighted returns (MWR)
                    are common methods for calculating investment returns, each
                    with unique benefits and drawbacks.
                  </p>
                  <p>
                    Annualizing returns can make multi-period returns comparable
                    across other portfolios or potential investments.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Understanding individual assets in your portfolio is a good
                    starting point for assessing overall performance. One common
                    method is calculating the return on investment (ROI),
                    indicating how effectively an asset uses your capital.
                  </p>
                  <p>
                    Example: Suppose you invest $1,000 in a stock and sell it
                    for $1,500 after one year, earning $20 in dividends but
                    paying $5 in trading commissions. Here's how to calculate
                    ROI:
                  </p>
                  <p>
                    1.Find the initial cost, which is $1,000 (investment) + $5
                    (commission) = $1,005.
                  </p>
                  <p>
                    2.Determine the current value, which is the sale price of
                    $1,500.
                  </p>
                  <p>3.Add any dividends: $1,500 + $20 = $1,520.</p>
                  <p>4.Calculate the net gain: $1,520 − $1,005 = $515.</p>
                  <p>
                    5.Find the ROI by dividing the net gain by the initial cost:
                    $515 ÷ $1,005 = 0.512 or 51.2%.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    If you have a diversified portfolio with various asset
                    types, calculating the total portfolio return can be
                    complex. To start, list each asset class in a spreadsheet,
                    including their ROI, dividends, fees, and other relevant
                    figures. Here's a general approach to determine the total
                    portfolio return:
                  </p>
                  <p>
                    1.Multiply the ROI of each asset by its weight in the
                    portfolio (as a percentage of total value).
                  </p>
                  <p>
                    Sum the weighted ROIs to get the total portfolio return.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Time-weighted returns (TWR) focus on the investment's
                    performance by removing the impact of external cash flows,
                    such as deposits or withdrawals. This method is useful when
                    comparing the effectiveness of different portfolios or fund
                    managers, as it measures only the asset's performance
                    without influence from external factors.
                  </p>
                  <p>
                    To calculate TWR, break the investment journey into periods,
                    calculate the rate of return for each, then multiply the
                    rates of return together, subtracting one at the end. This
                    method provides a fair comparison between different
                    portfolios and is valuable for assessing fund managers'
                    performance.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Money-weighted returns (MWR) consider the timing and size of
                    cash flows. MWR calculates the internal rate of return,
                    reflecting the individual investor's experience and
                    decisions regarding contributions and withdrawals. This
                    approach is more personalized and captures the impact of
                    investor decisions on their investment outcomes.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    When calculating investment returns, consider other
                    important factors beyond TWR and MWR. These include the
                    holding period for each asset, dividends, interest, fees,
                    and the impact of taxes. Additionally, consider downside
                    risks—the potential for asset or portfolio losses—and
                    opportunity costs, which represent what you forgo by
                    choosing one investment over another.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Holding period return (HPR) includes the income from
                    dividends and interest, providing a more comprehensive view
                    of your portfolio's returns over a specific period. HPR is
                    especially useful for comparing different investments with
                    varying holding periods.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Portfolios are dynamic, with deposits and withdrawals
                    affecting your returns. The modified Dietz method and the
                    internal rate of return (IRR) are common ways to adjust for
                    these cash flows, ensuring accurate return calculations.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Annualized returns standardize multi-period returns into a
                    yearly figure, allowing for more straightforward comparisons
                    between different investments. This approach takes into
                    account the effect of compounding and provides a consistent
                    metric for assessing investment performance.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    Suppose you have a portfolio valued at $10,000 at the
                    beginning of the year and $13,350 at year-end, with an
                    additional $500 dividend received mid-year and $150 in fees.
                    Here's how you'd calculate the return on investment:
                  </p>
                  <p>
                    1.Find the net gain: $13,350 − $10,000 + $500 − $150 =
                    $3,700.
                  </p>
                  <p>
                    2.Calculate the ROI by dividing the net gain by the initial
                    investment: $3,700 ÷ $10,000 = 0.37 or 37%.
                  </p>
                  <p>
                    This example illustrates how to calculate a simple ROI.
                    However, more complex situations involving deposits or
                    withdrawals require adjusting for cash flows to get a
                    clearer picture of your portfolio's performance. Ultimately,
                    understanding the various methods for calculating returns
                    and considering additional factors such as dividends, cash
                    flows, and opportunity costs can lead to a more accurate
                    view of your portfolio's success and guide your investment
                    strategy.
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

export default MeasuringInvestmentReturns;
