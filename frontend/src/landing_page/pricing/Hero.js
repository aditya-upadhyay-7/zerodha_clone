import React from "react";

function Hero() {
  return (
    <div className="container p-5 text-center border-bottom">
      <div className="row text-center border-bottom p-5">
        <h1 className="mt-4">Pricing</h1>
        <p className="fs-5 text-muted mb-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      <div className="row px-5 mt-5 text-center">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="Number" style={{width:"85%"}}/>
          <h1 className="fs-2 mt-3 mb-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" alt="Number"  style={{width:"85%"}} />
          <h1 className="fs-2 mt-3 mb-4">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="Number"  style={{width:"85%"}}/>
          <h1 className="fs-2 mt-3 mb-4">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
