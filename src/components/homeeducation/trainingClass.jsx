import React from "react";

export default function () {
  return (
    <div className="classTop">
      <article className="producthome">
        <h4 className="producthome-brand">{user.title}</h4>
        <div className="producthome-img">
          <img src={user.image} alt="" />
        </div>
      </article>
    </div>
  );
}
