import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

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
          <Card />
          <Card />
          <Card />
        </div> 
      </div>
    </div>
  );
}

export default App;
