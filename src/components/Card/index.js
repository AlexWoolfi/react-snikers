import React from 'react';
import styles from './Card.module.scss';
// console.log(styles);

function Card(props) {
  // const alertUp=()=>alert(props.title)
  const [isAdded,setIsAdded] = React.useState(false);
  const handelPlus= ()=> {
    setIsAdded(!isAdded);
  }

  React.useEffect(()=> {
    console.log('Varable is change');
  }, [isAdded]);


  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickFavorite}>
        <img src="\img\heart-white.svg" alt="heart-white" />
      </div>
      <img 
        width={133}
        height={112}
        src={props.imageUrl}
        alt="Snikers"
      /> 
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex justify-between align-center">
          <p className="mr-5">Price</p>

          <b className="mr-15">{props.price} uah</b>
          {/* <button className="button" onClick={alertUp}> */}
          {/* <button className="button" onClick={props.onClickPlus}>
            <img width={13} height={13} src="\img\plus-white.svg" alt="Plus" />
          </button> */}
          <img className={styles.plus} width={20} height={20}
           onClick={handelPlus}
           src={isAdded ? "/img/plus-green.svg":"/img/plus-white.svg"}
           alt="Plus" />
        </div>
      </div>
    </div>
  );
}

export default Card;
