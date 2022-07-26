function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="\img\heart-white.svg" alt="heart-white" />
      </div>
      <img
        width={133}
        height={112}
        src="\img\snikers\image1.jpg"
        alt="Snikers"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex justify-between align-center">
          <p className="mr-5">Price</p>

          <b className="mr-15">12 999 uah</b>
          <button className="button">
            <img width={13} height={13} src="\img\plus-white.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
