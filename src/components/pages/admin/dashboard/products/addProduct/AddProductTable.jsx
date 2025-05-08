import {
  AddProductFile,
  AddProductInputField,
  AddProductTextAre
} from "../../../../../utility/re-usable/AddProductInputField.jsx";
import {useState} from "react";

const AddProductTable = ({ handleInput, handleSubmit }) => {
  const [files, setFiles] = useState([]);
  const handleInputFile = event => {
    setFiles(event.target.files);
  }
  return (
    <div className="w-full h-screen mt-20 ">
      <form className="max-w-sm mx-auto">
        <AddProductInputField
          label="Product Name"
          type="text"
          name="name"
          handleInput={handleInput}
          placeholder="Enter Product Name"
        />
        <AddProductInputField
          label="Brand"
          type="text"
          name="brand"
          handleInput={handleInput}
          placeholder="Enter Brand Name"
        />
        <AddProductTextAre
          label="Description"
          name="description"
          handleInput={handleInput}
          placeholder="Enter Description"
        />
        <AddProductInputField
          label="Category"
          type="text"
          name="category"
          handleInput={handleInput}
          placeholder="Enter Category"
        /><AddProductInputField
          label="labelled Price"
          type="number"
          name="labelledPrice"
          handleInput={handleInput}
          placeholder="labelled Price"
        /><AddProductInputField
          label="Price"
          type="number"
          name="price"
          handleInput={handleInput}
          placeholder="Enter Price"
        /><AddProductInputField
          label="Quantity"
          type="number"
          name="quantity"
          handleInput={handleInput}
          placeholder="Enter Quantity"
        />
        <AddProductFile
          name="image"
          label="Product Images"
          handleInputFile={handleInputFile}
        />
        <button type="submit"
                onClick={() => {handleSubmit(files)}}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
      </form>

    </div>
  );
};

export default AddProductTable;
