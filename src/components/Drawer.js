function Drawer({ onCloseCart, items = [], onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">
          CART{" "}
          <img
            onClick={onCloseCart}
            className="remove-btn  cu-p"
            src="\img\btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
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
              <button className="greenButton">
                Order <img src="\img\arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              class="mb-20"
              width="120px"
              height="120px"
              src="\img\empty-cart.jpg"
              alt="empty-car"
            />
            <h2>Cart is empty</h2>
            <p>Add at least 1 product to place an order</p>
            <button onClick={onCloseCart} className="greenButton">
              <img  src="\img\arrow.svg" alt="arrow" />
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
