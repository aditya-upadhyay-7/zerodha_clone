import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  return (
    <div>
        <div className="text-center">
      <h3 className="text-muted fs-4 p-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </h3>
      <h1 className="mb-4 fs-2">The Zerodha Universe</h1>
      <p className="text-muted mt-2">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      </div>
    <div className="text-center p-5 image-cluster">
      <img src="media/images/smallcaseLogo.png" alt="Product Logos" style={{width:"13%"}} />
      <img src="media/images/streakLogo.png" alt="Product Logos" style={{width:"13%"}} />
      <img src="media/images/sensibullLogo.svg" alt="Product Logos" style={{width:"13%"}}/>
    </div>
      <br />
    <div className="text-center image-cluster">  
      <img src="media/images/zerodhaFundhouse.png" alt="Product Logos" style={{width:"13%"}}/>
      <img src="media/images/tijori.svg" alt="Product Logos" style={{width:"13%"}}/>
      <img src="media/images/dittoLogo.png" alt="Product Logos" style={{width:"13%"}}/>
    </div>

    <div className=" text-center my-5">
      <button
        className="p-2 btn btn-primary fs-5 mt-3 mb-5"
        style={{ width: "12%", margin: "0 auto", backgroundColor: "#387ED1" }} onClick={() => {
          navigate("/signup");
        }}
      >
       Singup now
      </button>
    </div>
    </div>
  );
}

export default Universe;
