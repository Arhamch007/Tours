import React, { useState } from "react";

const Tour = ({ name, id, info, image, price,removeArticle }) => {
  const [infoData,setInfoData]=useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {infoData? info : `${info.substring(0,200)}...` }
        </p>
        <button onClick={()=>setInfoData(!infoData)}>
          {!infoData ?"Show Full": "Show Less"}
        </button>
        <button className="delete-btn" onClick={()=>removeArticle(id)}>Not Interested</button>

      </footer>
    </article>
  );
};

export default Tour;
