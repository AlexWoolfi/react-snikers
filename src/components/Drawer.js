function Drawer() {
    return (
        <div style={{display:'none'}} className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between">
          CART{" "}
          <img
            className="remove-btn  cu-p"
            src="\img\btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        <div className="cartItem d-flex align-center">
          <div
            style={{ backgroundImage: "url(/img/snikers/image2.jpg)" }}
            className="carItemImg"
          ></div>
          <div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 uah</b>
            </div>
          </div>
          <img
            className="remove-btn"
            src="\img\btn-remove.svg"
            alt="btn-remove"
          />
        </div>

        <div className="cartItem d-flex align-center">
          <div
            style={{ backgroundImage: "url(/img/snikers/image1.jpg)" }}
            className="carItemImg"
          ></div>
          <div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 uah</b>
            </div>
          </div>
          <img
            className="remove-btn"
            src="\img\btn-remove.svg"
            alt="btn-remove"
          />
        </div>

        <div className="items">
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
      </div>
    )
}

export default Drawer;