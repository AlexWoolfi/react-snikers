import React from 'react';
import Card from "../components/Card";
// import { AppContext} from "../App";

// function Home(items,
//     searchValue,
//     onChangeSearchInput,
//     toCleanSearch,
//     onAddFavorite,
//     onAddToCart)
function Home(props) {
  
  // const { getAdedItems } = React.useContext(AppContext);
  const renderItems=()=>{
   const filtrItems = props.items.filter((item) =>
   item.title.toLowerCase().includes(props.searchValue.toLowerCase())
 )
    return (props.isLoading ?[...Array(8)] : filtrItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => props.onAddFavorite(obj)}
        onPlus={(obj) => props.onAddToCart(obj)}
        isLoading ={props.isLoading}
        {...item}
        // id= {item.id}
        // title={item.title}
        // imageUrl={item.imageUrl}
        // price={item.price}// addEd={props.cartItems.some(obj => Number(obj.id) === Number(item.id))}
        // addEdit = { getAdedItems(item && item.id)}
        
      />
    ))
  }
    return (
        <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>
            {props.searchValue ? `Поиск по запросу:"${props.searchValue}"` : `All sniker`}
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
          {renderItems()}
        </div>
      </div>
    );
}
export default Home;