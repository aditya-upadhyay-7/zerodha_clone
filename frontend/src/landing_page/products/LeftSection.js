import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  link1,
  link1Name,
  arrow,
  link2,
  link2Name,
  arrow2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
        <div className="row p-5">
            <div className="col-6 p-5">
                <img src={imageURL} alt="Pricing"/>
            </div>
            <div className="col-1"></div>
            <div className="col-5 px-5 mt-5">
                <h1 className="my-5">{productName}</h1>
                <p>{productDescription}</p>
                <div className="mb-4">
                <a href={link1} style={{textDecoration:"none", fontWeight:"500", color:"#387ED1"}}>{link1Name} {arrow}</a>
                <a href={link2} style={{marginLeft:"70px", textDecoration:"none", fontWeight:"500", color:"#387ED1"}}>{link2Name} {arrow2}</a>
                </div>
                
                <div>
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play Badge"/></a>
                <a href={appStore} style={{marginLeft:"25px"}}><img src="media/images/appstoreBadge.svg" alt="App Store Badge" style={{width:"30.5%"}}/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
