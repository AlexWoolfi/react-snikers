import Card from "../components/Card";

function Home({items,
    searchValue,
    onChangeSearchInput,
    toCleanSearch,
    onAddFavorite,
    onAddToCart}) {
    return (
        <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>
            {searchValue ? `Поиск по запросу:"${searchValue}"` : `All sniker`}
          </h1>
          <div className="search-block d-flex">
            {searchValue && (
              <img
                //  onClick={()=>setSearchValue('')}
                onClick={toCleanSearch}
                className="clear cu-p"
                src="\img\btn-remove.svg"
                alt="Claer"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              className="d-flex"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    );
}
export default Home;