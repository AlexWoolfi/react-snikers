import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App(isAdded,onClickPlus) {
  const [isCartOpen, setCart] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [cartItems, setcartItems] = React.useState([]);

  React.useEffect(()=> {
    fetch('https://62e4e10fc6b56b45118b3324.mockapi.io/Items')
    .then(res=>{
      return res.json();
    }).then(json=>{
      // console.log(json);
      setItems(json);
    });
  },[]);


  // const onAddToCart = (obj)=> {
  // setcartItems([...cartItems,obj]);
  
  // }

  // const checkCart=(obj)=> {
  //   if(!isAdded){
  //       onAddToCart(obj);
  //   }не работает
  // }

  const onAddToCart = (obj)=> {
 if(isAdded= false) {
  onClickPlus();
  console.log('green');
  setcartItems(prev =>[...prev,obj]); 
 }else {}
    }


return (
    <div className="wrapper clear">
   {/* {isCartOpen?<Drawer/>:null} */}
    {/* {isCartOpen ? <Drawer onCloseCart={()=>setCart(false)}/> : null} */}
    {isCartOpen && <Drawer items={cartItems} onCloseCart={()=>setCart(false)}/>}
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
          {items.map((item) => (
            <Card 
            title={item.title} 
            imageUrl={item.imageUrl} 
            price={item.price} 
            onFavorite ={()=>console.log("Add to favorite")}
            // onPlus ={(obj)=>console.log(obj)}
            onPlus ={onAddToCart}
            // onPlus ={checkCart}
            />
            
          ))}
        </div>
      </div> 
    </div>
  );
 }

export default App;
