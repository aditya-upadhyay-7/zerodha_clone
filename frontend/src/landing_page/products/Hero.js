import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mt-5">
      <div className="text-center my-5 p-5">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 mb-4 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mb-4">
          Check out our &nbsp;
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "#387ED1",
            }}
          >
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
