import AddProductTable from "./AddProductTable.jsx";
import { useState } from "react";
import { imageUpload } from "../../../../../utility/promise/imageUploadPromise.js";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddProduct = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    brand: "",
    descriptionStatement: "",
    description: [],
    category: "",
    labelledPrice: 0,
    price: 0,
    quantity: 0,
    images: [],
  });
  const [errState, setErrState] = useState({
    name: "",
    brand: "",
    descriptionStatement: "",
    description: "",
    category: "",
    labelledPrice: "",
    price: "",
    quantity: "",
    images: "",
  });
  const handleInput = async (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const handleSubmit = async (images) => {
    const handleSubmitToast = toast.loading("Loading...");
    inputData.description = inputData.descriptionStatement.split(", ");
    const discount = inputData.labelledPrice - inputData.price;
    const promiseArray = [];
    for (let i = 0; i < images.length; i++) {
      promiseArray[i] = imageUpload(images[i]);
    }
    try {
      const publicUrls = await Promise.all(promiseArray);

      const req = {
        name: inputData.name,
        brand: inputData.brand,
        description: inputData.description,
        category: inputData.category,
        labelledPrice: inputData.labelledPrice,
        price: inputData.price,
        quantity: inputData.quantity,
        discounts: discount,
        images: publicUrls,
      };
      try {
        const response = await axios.post("/api/products/add", req, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.status === 200) {
          toast.dismiss(handleSubmitToast);
          navigate("/dashboard/products");
        }
      } catch (err) {
        toast.dismiss(handleSubmitToast);
        toast.error(err);
      }
    } catch (err) {
      toast.dismiss(handleSubmitToast);
      toast.error(err);
      console.log(err);
    }
  };
  return (
    <div>
      <AddProductTable
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        errState={errState}
      />
    </div>
  );
};

export default AddProduct;
