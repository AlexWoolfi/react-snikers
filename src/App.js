import React from "react";
import { Route  } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});

function App() {
  const [isCartOpen, setCart] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setcartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const [isLoadingReady, setLoadingReady] = React.useState(true);

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

    async function axiosGetData() {
      setLoadingReady(true);
      const cartResponse = await  axios
      .get("https://62e4e10fc6b56b45118b3324.mockapi.io/Cart");
      const favoritesResponse = await axios
      .get("https://62e4e10fc6b56b45118b3324.mockapi.io/favorites");
      const itemsResponse = await axios
      .get("https://62e4e10fc6b56b45118b3324.mockapi.io/Items");

      setLoadingReady(false);

      setcartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    axiosGetData();


    // axios
    //   .get("https://62e4e10fc6b56b45118b3324.mockapi.io/Items")
    //   .then((res) => {
    //     console.log(res.data);
    //     setItems(res.data);
    //   });
    // axios
    //   .get("https://62e4e10fc6b56b45118b3324.mockapi.io/Cart")
    //   .then((res) => {
    //     console.log(res.data);
    //     setcartItems(res.data);
    //   });
    //   axios
    //   .get("https://62e4e10fc6b56b45118b3324.mockapi.io/favorites")
    //   .then((res) => {
    //     console.log(res.data);
    //     setFavorites(res.data);
    //   });
  }, []);

  const onAddToCart = async(obj) => {
    console.log(obj);
    try {
     if(cartItems.find(item => item.id === obj.id)){
      axios.delete(`https://62e4e10fc6b56b45118b3324.mockapi.io/Cart/${obj.id}`);
       setcartItems(prev=>prev.filter(item => item.id !== obj.id))
     }
     else {
      axios.post("https://62e4e10fc6b56b45118b3324.mockapi.io/Cart", obj);
      // setcartItems([...cartItems,obj]);
      setcartItems((prev) => [...cartItems, obj]);
      //Вопрос
     }
    } catch (error) {
      alert('Error: ' + error.message);
    }
   
  };



  const onAddFavorite = async(obj) => {
    console.log(obj);
    try {
      if(favorites.find(favObj=>Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://62e4e10fc6b56b45118b3324.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      }else {
        const { data } = await axios.post("https://62e4e10fc6b56b45118b3324.mockapi.io/favorites", obj);
        setFavorites((prev) => [...favorites, data]);
      }
    } catch (error) {
      alert("Cannot to add favorites", error.message)
    }
   
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


 const getAdedItems = (id) => {
  return cartItems.some(obj => Number(obj.id) === Number(id));
 }

  return (
   <AppContext.Provider value={{items, cartItems, favorites,getAdedItems, setCart, setcartItems}}>
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
      
        <Route path="/" exact>
          <Home
            cartItems={cartItems}
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            toCleanSearch={toCleanSearch}
            onAddFavorite={onAddFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoadingReady}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites
           items= {favorites}
           onAddFavorite={onAddFavorite}
           searchValue={searchValue}
           setSearchValue={setSearchValue}
           onChangeSearchInput={onChangeSearchInput}
           toCleanSearch={toCleanSearch} />
        </Route>
      
    </div>
   </AppContext.Provider>
  );
}

export default App;
