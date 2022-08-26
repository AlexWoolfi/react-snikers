import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import { AppContext} from "../../App";
// console.log(styles);
// const MyLoader = (props) => (
//   <ContentLoader 
//     speed={2}
//     width={150}
//     height={200}
//     viewBox="0 0 150 200"
//     backgroundColor="#f3f3f3"
//     foregroundColor="#ecebeb"
//     {...props}
//   >
//     <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
//     <rect x="0" y="106" rx="10" ry="10" width="150" height="15" /> 
//     <rect x="0" y="136" rx="10" ry="10" width="93" height="15" /> 
//     <rect x="0" y="176" rx="8" ry="8" width="80" height="24" /> 
//     <rect x="119" y="168" rx="8" ry="8" width="32" height="32" />
//   </ContentLoader>
// )

function Card({
  id,
  imageUrl,
  title,
  price,
  onPlus,
  onFavorite,
  isFavorited = false,
  addEd = false,
  isLoading = false
}) {
  // const alertUp=()=>alert(props.title)
  const { getAdedItems } = React.useContext(AppContext);
  console.log(title, getAdedItems(id));
  // const [isAdded, setIsAdded] = React.useState(addEd); Уже не нужно так как Контекст
  const [isLike, setIsLike] = React.useState(isFavorited);

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsLike(!isLike);
  };

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    // setIsAdded(!isAdded);
  };

  // React.useEffect(()=> {
  //   console.log('Varable is change');
  // }, [isAdded]);
  

  return (
    <div className={styles.card}>
      {
        isLoading ? <ContentLoader 
        speed={2}
        width={150}
        height={200}
        viewBox="0 0 150 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
        <rect x="0" y="106" rx="10" ry="10" width="150" height="15" /> 
        <rect x="0" y="136" rx="10" ry="10" width="93" height="15" /> 
        <rect x="0" y="176" rx="8" ry="8" width="80" height="24" /> 
        <rect x="119" y="168" rx="8" ry="8" width="32" height="32" />
      </ContentLoader> :
        <>
        <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isLike ? "/img/heart-red.svg" : "/img/heart-white.svg"}
          alt="heart-white"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Snikers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex justify-between align-center">
          <p className="mr-5">Price</p>

          <b className="mr-15">{price} uah</b>
          {/* <button className="button" onClick={alertUp}> */}
          {/* <button className="button" onClick={props.onClickPlus}>
            <img width={13} height={13} src="\img\plus-white.svg" alt="Plus" />
          </button> */}
          <img
            className={styles.plus}
            width={20}
            height={20}
            onClick={onClickPlus}
            // src={isAdded ? "/img/plus-green.svg" : "/img/plus-white.svg"}
            src={getAdedItems(id) ? "/img/plus-green.svg" : "/img/plus-white.svg"}
            alt="Plus"
          />
        </div>
      </div>
      </>
      }
      
    </div>
  );
}

export default Card;
