import React, { useEffect, useState } from "react";
// import { API } from "./API";
import "./../asset/css/main.css";
import CardLanding from "./CardHome";
import { getGenre } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux'

// const uniqueList = [
//   ...new Set(
//     API.map((currElem) => {
//       return currElem.type;
//     })
//   ),
//   "All",
// ];



const Menu = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenre())
  }, [dispatch])

  const Genre = useSelector((state) => state.genre)

  const uniqueList = [
    ...new Set(
      // API.map((currElem) => {
      Genre.map((currElem) => {
        return currElem.type;
      })
    ),
    "All",
  ];

  let [menuProducts, setMenuProducts] = useState(Genre);
  let [menuMostrar, setMenuMostrar] = useState("");
  let [activeTab, setactiveTab] = useState("");


  // console.log(uniqueList);

  const filterProducts = (type) => {
    let updatedProducts = Genre.filter((currentElem) => {
      setMenuMostrar(currentElem.type)
      return currentElem.type === type;
    });

    setMenuProducts(updatedProducts);
    
  };

  return (
    <>
      <div className="mainContainer">
        <div className="menu">
          <ul>
            {uniqueList.map(list => {
              return (
                <>
                  <li
                    onClick={() => {
                      if (list != 'All') {
                        filterProducts(list)
                        } else {
                        setMenuProducts(Genre)
                        setMenuMostrar("All")
                      }
                    }
                      // list != 'All' ? filterProducts(list) : setMenuProducts(API)
                    }
                    className={activeTab}>
                    {list}
                  </li>
                </>
              )
            })}
          </ul>
        </div>
        <div className="title-menu"><h2>{menuMostrar}</h2></div>
        <CardLanding menuProducts={menuProducts} />
      </div>
    </>
  );
};

export default Menu;
