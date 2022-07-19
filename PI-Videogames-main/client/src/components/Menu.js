import React, { useEffect, useState } from "react";
import "./../asset/css/main.css";
import CardLanding from "./CardLanding";
import { getGenre} from "../redux/action";
import { useDispatch, useSelector } from 'react-redux'
import Loading from "./Loading/Loading";
import NotFound from "./NotFound/NotFound";

const Menu = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenre())
  }, [dispatch])

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getVideoGame());
  // }, [dispatch]);


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

  // console.log(Genre)

  let [menuMostrar, setMenuMostrar] = useState("");
  let [menuProducts, setMenuProducts] = useState(Genre);
  let [loading, setLoading] = useState(true);

  const filterProducts = (type) => {
    let updatedProducts = Genre.filter((currentElem) => {
      setMenuMostrar(currentElem.type)
      return currentElem.type === type;
    });

    setMenuProducts(updatedProducts);
  };

  if (Genre.length > 0 && loading) {
    setLoading(false)
    setMenuProducts(Genre)
  }
  return (
    <>
      <div className="mainContainer">
        <div className="menu">
          <ul>
            {
              uniqueList.map(list => {
                return (
                  <>
                    <li
                      onClick={() => {
                        if (list !== 'All') {
                          filterProducts(list)
                        } else {
                          setMenuProducts(Genre)
                          setMenuMostrar("All")
                        }
                      }
                        // list != 'All' ? filterProducts(list) : setMenuProducts(API)
                      }
                    >
                      {list}
                    </li>
                  </>
                )
              })


            }
          </ul>
        </div>
        <div className="title-menu"><h2>{menuMostrar?menuMostrar:"Genre"}</h2></div>
        {Genre.length > 0 && !loading ? (
          (<CardLanding menuProducts={menuProducts} />)
        ) : !Genre.length > 0 && loading ? (
          <Loading />
        ) : (
          <NotFound />
        )
        }
      </div>
    </>
  );
};

export default Menu;
