import React from "react";
import TableOfContent from "../../TableofContent";
import "./stockmarket.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
// import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const OwningAStockMeans = () => {
  const headings = [
    {
      id: "section1",
      title: "Understanding the Limitations of Stock Ownership",
    },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "Misconception 1: I'm the Boss" },
    {
      id: "section4",
      title: "Misconception 2: 'I Get Discounts on Products and Services'",
    },
    {
      id: "section5",
      title: "Misconception 3: 'I Own the Company's Property'",
    },
    { id: "section6", title: "Conclusion" },
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
      <h1 className="stockpagetitle">What Owning a Stock Actually Means</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Many new investors understand that owning stock represents a
                    share of ownership in a company, but there's often confusion
                    about the exact benefits and responsibilities that come with
                    it. This misunderstanding is frequently due to a lack of
                    clarity on what owning a share means, particularly with
                    large corporations like Apple (AAPL) and Exxon Mobil (XOM),
                    where a single share constitutes a very small portion of the
                    company's total ownership. Even owning $1 million worth of
                    shares would be just a drop in the ocean in terms of
                    influence or control.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Holding shares means you own a part of a company, but this
                    doesn't automatically confer significant control or
                    benefits.
                  </p>
                  <p>
                    Shareholders usually don't have direct control over company
                    operations, but some stocks carry voting rights that allow
                    them to vote for board members
                  </p>
                  <p>
                    Ownership of stock does not grant you special privileges
                    like discounts or the right to claim company assets.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    One common misconception is that owning stock makes you a
                    part of the company's management. However, as a shareholder,
                    your influence is limited. You can't walk into the corporate
                    office and start giving orders. Instead, when you buy stock,
                    you're trusting the company's management to make the right
                    decisions. If you're unhappy with how things are managed,
                    you can sell your shares. If you're content, you keep them
                    and hope for a good return.
                  </p>
                  <p>
                    Senior executives and company insiders often own a large
                    number of shares, potentially more than individual
                    investors. This can align their interests with those of
                    other shareholders, but it can also lead to potential
                    conflicts of interest, as insiders might engage in
                    activities to manipulate stock prices to their benefit.
                  </p>
                  <p>
                    While you don't manage the company, voting rights can offer
                    some influence, as you can vote for board members who
                    oversee the company's direction. This provides a level of
                    indirect control, albeit limited, over the company's
                    operations.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Another common misconception is that owning stock entitles
                    you to discounts on the company's products or services.
                    While some exceptions exist, such as Berkshire Hathaway's
                    (BRK/A) annual shareholder event where discounts are
                    offered, this is not the norm. Typically, owning shares
                    gives you the right to participate in the company's
                    profitability, not to enjoy perks like discounts.
                  </p>
                  <p>
                    Offering widespread shareholder discounts could negatively
                    impact a company's revenue, which would ultimately affect
                    the stock price. In a large publicly traded company, the
                    loss in revenue from discounts could have a significant
                    effect on the bottom line, reducing profitability and,
                    consequently, the stock's value.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    As a shareholder, you own a portion of the company, but that
                    doesn't mean you have ownership of its physical assets like
                    chairs, desks, or real estate. Companies often have debts
                    secured by these assets. If the company defaults on its
                    loans, creditors, such as banks and bondholders, have the
                    first claim on these assets.
                  </p>
                  <p>
                    In the event of insolvency, creditors are repaid before
                    shareholders receive any compensation. This means that if a
                    company goes bankrupt, shareholders are the last in line to
                    recover any value from the company's remaining assets. This
                    reality underscores the risks of owning stock, particularly
                    in companies with significant debt or uncertain financial
                    health.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Hopefully, this clarifies some of the common misconceptions
                    about what it means to own stock. So, next time you consider
                    bringing your stock certificate to a company headquarters to
                    demand discounts, wield executive power, or claim company
                    property, remember that owning shares doesn't grant these
                    privileges. The true power of ownership lies in your ability
                    to influence the company's direction through voting rights
                    and share in its profitability.
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

export default OwningAStockMeans;
