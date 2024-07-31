import React from "react";

function Brokerage() {
  return (
    <div className="container px-5 mb-5">
      <div className="row px-5">
        <div className="col-8 mb-4">
          <a href="/" style={{ textDecoration: "none", color: "#387ED1" }}>
            <h1 style={{ fontWeight: "400", marginLeft:"170px", fontSize:"22px" }}>Brokerage calculator</h1>
          </a>
          <div style={{fontSize:"13px", marginLeft:"30px"}} className="mt-5 text-muted pricing-listItems">
            <ul>
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
        <a href="/" style={{ textDecoration: "none", color: "#387ED1" }}>
        <h1 style={{ fontWeight: "400", marginLeft:"25px", fontSize:"22px"}}>List of charges</h1>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
