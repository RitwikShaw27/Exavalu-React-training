import { useEffect, useState } from "react";

// import "./App.css";
import ProductsData from "./components/ProductsData";

const API = "https://dummyjson.com/products";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (url) => {
    // try {
    //   const res = await fetch(url);
    //   const data = await res.json();

    //   setProducts(data.products);
    //   console.log(data.products);
    // } catch (err) {
    //   console.error(err.message);
    // }
    fetch(url)
      .then((response) => response.json())
      .then((actualData) => {
        setProducts(actualData.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchProducts(API);
  }, []);

  return (
    <>
      {/* <h1 className="bg-green-700">Hello world</h1> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <ProductsData products={products} />
        </tbody>
      </table>
    </>
  );
}

export default App;
