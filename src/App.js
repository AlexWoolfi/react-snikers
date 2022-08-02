import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {
  const [isCartOpen, setCart] = React.useState(false);
  const [items, setItems] = React.useState([]);


return (
    <div className="wrapper clear">
    {/* {isCartOpen ? <Drawer onCloseCart={()=>setCart(false)}/> : null} */}
    {isCartOpen && <Drawer onCloseCart={()=>setCart(false)}/>}
      <Header onClickCart={()=>setCart(true)
      }/>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>All snikers</h1>
          <div className="search-block">
            <input className="d-flex" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card 
            title={obj.title} 
            imageUrl={obj.imageUrl} 
            price={obj.price} 
            onClickFavorite ={()=>console.log("Add to favorite")}
            onClickPlus ={()=>console.log("Add to cart")}
            />
            
          ))}
        </div>
      </div> 
    </div>
  );
 }

export default App;
