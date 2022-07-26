import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Suede-1",
    price: 1299,
    imageUrl: "/img/snikers/image1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Suede-2",
    price: 1400,
    imageUrl: "/img/snikers/image2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Suede-3",
    price: 1500,
    imageUrl: "/img/snikers/image3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>All snikers</h1>
          <div className="search-block">
            <input className="d-flex" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card 
            title={obj.title} 
            imageUrl={obj.imageUrl} 
            price={obj.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
