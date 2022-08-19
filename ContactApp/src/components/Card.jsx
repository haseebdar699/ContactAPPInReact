import React from "react";
import Avatar from "./Avatar";

function Card(prop) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <Avatar img={prop.img} />
        </div>
        <div className="bottom">
          <p className="info">{prop.tel}</p>
          <p className="info">{prop.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
