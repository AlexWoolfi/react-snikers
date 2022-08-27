import React from "react";
import Info from "./Info";
import { AppContext } from "../App";
import axios from "axios";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Drawer({ onCloseCart, items = [], onRemove }) {
  const { cartItems, setcartItems } = React.useContext(AppContext);
  const [orderDone, setOrderDone] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.post(
        "https://62e4e10fc6b56b45118b3324.mockapi.io/Orders",
        {items: cartItems}
      );
      setOrderId(data.id);
      setOrderDone(true);
      setcartItems([]);

      for(let i=0; i<cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://62e4e10fc6b56b45118b3324.mockapi.io/Cart/${item.id}`);
        await delay();
      }
     
     
    } catch (error) {
      alert("you order is loose, please try again" + error.message);
    }
    setIsLoading(false);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          CART{" "}
          <img
            onClick={onCloseCart}
            className="remove-btn  cu-p"
            src="\img\btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="carItemImg"
                  ></div>
                  <div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} uah</b>
                    </div>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    src="\img\btn-remove.svg"
                    alt="btn-remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="">
                  <span>Total:</span>
                  <div></div>
                  <b>21 000 uah</b>
                </li>
                <li className="">
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>21 000 uah</b>
                </li>
              </ul>
              <button disabled ={isLoading} onClick={onClickOrder} className="greenButton">
                Order <img src="\img\arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={orderDone ? "Order Done" : "Cert is empty"}
            description={
              orderDone
                ? `Your order #${orderId} will be sended wery soon.`
                : "You need add product to cart"
            }
            image={orderDone ? "/img/completeOrder.jpg" : "/img/empty-cart.jpg"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
