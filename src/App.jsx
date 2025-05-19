import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import HomeProductContainer from "./components/homeProductContainer/HomeProductContainer";
import NavBar from "./components/navigationBar/NavBar.JSX";
import axios from "axios";
import toast from "react-hot-toast";

const App = () => {
  const [products, setProducts] = useState([]);
  const [promise, setPromise] = useState("pending"); // "pending", "fulfilled", "rejected"
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await axios.get('api/products');
      setPromise("fulfilled");
      setProducts(response.data.message);
    } catch (error) {
      toast.error("Error while fetching products");
      setPromise("rejected");
    }
  };

  return (
    <div>
      {
        promise === "pending" ? (
          <div className=" w-full h-[100vh] flex items-center justify-center flex-col">
            {/* <SunspotLoader
              gradientColors={["#F6339A", "#000"]}
              shadowColor={"#3730A3"}
              desktopSize={"100px"}
              mobileSize={"100px"}
            /> */}
          </div>
        ) : (
          <div>
            <NavBar />
            <Hero />
            <HomeProductContainer products={products} />
          </div>
        )
      }
    </div>
  )
};
export default App;