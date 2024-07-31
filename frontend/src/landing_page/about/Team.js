import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="text-center border-top p-5">People</h1>
      </div>

      <div
        className="row px-5 text-muted mb-5"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 text-center mb-5">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Owner"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-3 mb-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a href="/" style={{ textDecoration: "none", color: "#387ED1" }}>
              Homepage
            </a>
            &nbsp;/&nbsp;
            <a href="/" style={{ textDecoration: "none", color: "#387ED1" }}>
              TradingQnA
            </a>
            &nbsp;/&nbsp;
            <a href="/" style={{ textDecoration: "none", color: "#387ED1" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
