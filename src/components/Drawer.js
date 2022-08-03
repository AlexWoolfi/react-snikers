function Drawer({onCloseCart, items = []}) {


const deleteItem = (obj) => {
  setProducts(Products.filter(p => p !== product));
};

    return (
        <div className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between">
          CART{" "}
          <img onClick={onCloseCart}
            className="remove-btn  cu-p"
            src="\img\btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        <div className="items">
         {items.map((obj)=> (
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
      </div>
    )
}

export default Drawer;