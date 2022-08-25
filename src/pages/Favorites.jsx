import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App"


function Favorites(
      props) {

        const { favorites } = React.useContext(AppContext);
    return (
        <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>
            {props.searchValue ? `Поиск по запросу:"${props.searchValue}"` : `My Favorites`}
          </h1>
          <div className="search-block d-flex">
            {props.searchValue && (
              <img
                //  onClick={()=>setSearchValue('')}
                onClick={props.toCleanSearch}
                className="clear cu-p"
                src="\img\btn-remove.svg"
                alt="Claer"
              />
            )}
            <input
              onChange={props.onChangeSearchInput}
              value={props.searchValue}
              className="d-flex"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {favorites
          .filter(item =>item.title.toLowerCase().includes(props.searchValue.toLowerCase()))
          .map((item, index) =>
          <Card
                key={index}
                // title={item.title}
                // imageUrl={item.imageUrl}
                // price={item.price}
                onFavorite={(obj) => props.onAddFavorite(obj)}
                onPlus={(obj) => props.onAddToCart(obj)}
                isFavorited = {true}
                onAddFavorite={props.onAddFavorite}
                {...item}
              />)}
        </div>
      </div>
    );
}
export default Favorites;