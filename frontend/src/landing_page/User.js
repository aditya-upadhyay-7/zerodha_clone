import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const User = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      // if (!cookies.token) {
      //   navigate("/login");
      // }
      const { data } = await axios.post(
        "http://localhost:3002/", {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}!`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page">
        <h4>
          WELCOME <span style={{textTransform:"uppercase"}}>{username}!</span>
        </h4>
        <button className='p-2 btn btn-primary fs-5 mt-3 mb-2' style={{width:"15%", margin:"0 auto", backgroundColor:"#387ED1"}}><a href="http://localhost:3001/" style={{textDecoration:"none", color:"white"}}>Move to KITE <img style={{width:"30px", marginBottom: "4px", marginLeft: "3px"}} src="media\images\kite-logo.svg" alt="Kite Logo"/></a></button>

        <button onClick={Logout} className='p-2 btn btn-primary fs-5 mt-3 mb-5' style={{width:"15%", margin:"0 auto", backgroundColor:"#387ED1"}}>Logout</button>
      </div>
      <ToastContainer />
      <hr/>
      <div className="p-5">
      <div className="mb-5 p-5">
      <h2 className="px-5 mb-3 fs-2">About Kite</h2>
      <p className="px-5 mb-5">Zerodha Kite is our flagship trading and investment platform, used by over 50 lakh traders and investors who place 2+ crore orders every day. Why Kite? Free zero brokerage investments in stocks, bonds, Exchange-Traded Funds (ETFs), Initial Public Offerings (IPOs), government bonds, and gold bonds. </p>
      </div>
      </div>
    </>
  );
};

export default User;