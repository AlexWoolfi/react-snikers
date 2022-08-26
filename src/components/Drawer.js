import React from "react";
import  Info  from "./Info";
import { AppContext } from "../App"

function Drawer({ onCloseCart, items = [], onRemove }) {
  const { orderDone, setOrderDone} = React.useState(false);
 

  const onClickOrder = () => {
    setOrderDone(true);
    setcartItems([]);
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
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
              <button onClick={onClickOrder} className="greenButton">
                Order <img src="\img\arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info title="Cert is empty" description = "You need add product to cart" image = "\img\empty-cart.jpg"/>
        )}
      </div>
    </div>
  );
}

export default Drawer;
