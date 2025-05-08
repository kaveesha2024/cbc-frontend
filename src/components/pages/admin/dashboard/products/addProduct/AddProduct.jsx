import AddProductTable from "./AddProductTable.jsx";
import { useState } from "react";

const AddProduct = () => {
  const [inputDetails, setInputDetails] = useState({
    name: "",
    brand: "",
    description: "",
    category: "",
    discount: 0,
    labelledPrice: 0,
    price: 0,
    quantity: 0,
    images: [],
  });
  const handleInput = event => {
    const { name, value } = event.target;
    setInputDetails({
      ...inputDetails,
      [name]: value,
    });
  };
  const handleSubmit = files => {
    const discount = inputDetails.labelledPrice - inputDetails.price;
    setInputDetails({
      ...inputDetails,
      discount: discount
    });



  };
  return (
    <div>
      <AddProductTable handleInput={handleInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;