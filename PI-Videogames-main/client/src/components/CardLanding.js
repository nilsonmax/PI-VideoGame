import React from "react";
import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';

const CardLanding = ({ menuProducts }) => {
  return (
    <>
      <div className="container">
        {menuProducts.map((currentElem, index) => {
          return (
            <>
              <div key={index} className="card" >
                {/* <Link to={`/videogames/${id}`}> */}
                <div className="card__content">
                  <div className="card-header">
                    {/* <div className="sNo">{index + 1}</div> */}
                    <h5 className="title" key={index}>{currentElem.name}</h5>

                  </div>
                  <div className="card-body">
                    <div>
                      <Link to={`/videogames?genname=${currentElem.name}`}>
                        <button className="irNow">🡪</button>
                      </Link>
                      {/* <img src={currentElem.img} alt="Rajma" /> */}
                    </div>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardLanding;
