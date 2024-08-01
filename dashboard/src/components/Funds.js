import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with <b><i>UPI</i></b> </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored" style={{marginLeft:"270px"}}>4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp colored" style={{marginLeft:"280px"}}>3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp colored" style={{marginLeft:"270px"}}>4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p style={{marginLeft:"308px"}}>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p style={{marginLeft:"308px"}}>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p style={{marginLeft:"331px"}}>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p style={{marginLeft:"350px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p style={{marginLeft:"332px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p style={{marginLeft:"326px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p style={{marginLeft:"326px"}}>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p style={{marginLeft:"324px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p style={{marginLeft:"324px"}}>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p style={{marginLeft:"324px"}}>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;