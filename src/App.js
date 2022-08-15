import React from "react";
import { Route, Routes, Switch, Link } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [isCartOpen, setCart] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setcartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  // React.useEffect(()=> {
  //   fetch('https://62e4e10fc6b56b45118b3324.mockapi.io/Items')
  //   .then(res=>{
  //     return res.json();
  //   }).then(json=>{
  //     // console.log(json);
  //     setItems(json);
  //   });
  // },[]);
  React.useEffect(() => {
    axios
      .get("https://62e4e10fc6b56b45118b3324.mockapi.io/Items")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
    axios
      .get("https://62e4e10fc6b56b45118b3324.mockapi.io/Cart")
      .then((res) => {
        console.log(res.data);
        setcartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://62e4e10fc6b56b45118b3324.mockapi.io/Cart", obj);
    // setcartItems([...cartItems,obj]);
    setcartItems((prev) => [...cartItems, obj]);
    //Вопрос
  };
  const onAddFavorite = (obj) => {
    axios.post("https://62e4e10fc6b56b45118b3324.mockapi.io/favorites", obj);
    // setcartItems([...cartItems,obj]);
    setFavorites((prev) => [...favorites, obj]);
  };
  const onRemoveItemFromCart = (id) => {
    // console.log(id);
    axios.delete(`https://62e4e10fc6b56b45118b3324.mockapi.io/Cart/${id}`);
    // setcartItems([...cartItems,obj]);
    setcartItems((prev) => prev.filter((item) => item.id !== id));
  };

  //   const onAddToCart = (obj)=> {
  //  if(isAdded= false) {
  //   onClickPlus();
  //   console.log('green');
  //   setcartItems(prev =>[...prev,obj]);
  //  }else {}
  //     }
  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const toCleanSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="wrapper clear">
      {/* {isCartOpen?<Drawer/>:null} */}
      {/* {isCartOpen ? <Drawer onCloseCart={()=>setCart(false)}/> : null} */}
      {isCartOpen && (
        <Drawer
          items={cartItems}
          onCloseCart={() => setCart(false)}
          onRemove={onRemoveItemFromCart}
        />
      )}
      <Header onClickCart={() => setCart(true)} />
     
        <Route path="/test">
          "The test"
        </Route>
      
        
      

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>
            {searchValue ? `Поиск по запросу:"${searchValue}"` : `All sniker`}
          </h1>
          <div className="search-block d-flex">
            {searchValue && (
              <img
                //  onClick={()=>setSearchValue('')}
                onClick={toCleanSearch}
                className="clear cu-p"
                src="\img\btn-remove.svg"
                alt="Claer"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              className="d-flex"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
