import "./App.css";
import Card from "./components/Card";
import FilterBtn from "./components/FilterBtn";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SortBtn from "./components/SortBtn";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/41c4ca6c-9071-4eda-aea8-50188abe37d4")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://run.mocky.io/v3/44831fd2-d7e9-4069-8d27-4829ad2e152e")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading app ...........</h1>;
  }

  return (
    <div className="App">
      <Header />
      <h2>Accessories</h2>
      <div className="filter-container">
        {categories?.map((category, index) => (
          <FilterBtn
            key={index}
            index={index}
            name={category.name}
            active={setActive}
            current={active}
          />
        ))}
      </div>
      <div className="categories-container">
        {products?.map((product, index) => (
          <Card product={product} index={index} key={index} />
        ))}
      </div>
      <SortBtn />
    </div>
  );
}

export default App;
