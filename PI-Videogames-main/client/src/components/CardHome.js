import React from "react";
import image from '../asset/card-lang.png'

const CardLanding = ({ menuProducts }) => {
  return (
    <>
      <div className="container">
        {menuProducts.map((currentElem, index) => {
          return (
            <>
              <div className="card" key={currentElem.id}>
                <div className="card__content">
                  <div className="card-header">
                    {/* <div className="sNo">{index + 1}</div> */}
                    <h5 className="title">{currentElem.name}</h5>
                    
                  </div>
                  <div className="card-body">
                    <div>
                      <button className="irNow">🡪</button>
                      {/* <img src={currentElem.img} alt="Rajma" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardLanding;
