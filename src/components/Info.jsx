import React from 'react'
import { AppContext } from '../App';

 const Info = ( {image, title, description}) => {
    const { setCart} = React.useContext(AppContext)
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src= { image }
              alt="empty-cart"
            />
            <h2>{ title }</h2>
            <p>{ description }</p>
            <button onClick = {()=>setCart(false)} className="greenButton">
              <img  src="\img\arrow.svg" alt="arrow" />
              Back
            </button>
          </div>
  )
}

export default Info;
