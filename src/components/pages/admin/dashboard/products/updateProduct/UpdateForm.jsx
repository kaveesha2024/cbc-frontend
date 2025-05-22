import {
    AddProductFile,
    AddProductInputField,
    AddProductTextAre,
} from '../../../../../utility/re-usable/AddProductInputField.jsx';
import { useState } from 'react';

const UpdateForm = ({ previousDetails, handleInput, handleSubmit }) => {
    const prevFeatures = previousDetails.features.join(', ');
    const [files, setFiles] = useState([]);
    const handleInputFile = (event) => {
        setFiles(event.target.files);
    };
    return (
        <div className="w-full h-screen mt-20 ">
            <h1 className=" flex justify-center font-bold text-2xl mb-10 ">Update Product</h1>
            <form className="max-w-sm mx-auto">
                <AddProductInputField
                    label="Product Name"
                    type="text"
                    name="name"
                    handleInput={handleInput}
                    value={previousDetails.name}
                    placeholder="Enter Product Name"
                />
                <AddProductInputField
                    label="Brand"
                    type="text"
                    name="brand"
                    handleInput={handleInput}
                    value={previousDetails.brand}
                    placeholder="Enter Brand Name"
                />
                <div className="mb-5">
                    <select
                        onChange={handleInput}
                        defaultValue={previousDetails.isAvailable}
                        name="isAvailable"
                        id="isAvailable"
                    >
                        <option value="true">In Stock</option>
                        <option value="false">Out of Stock</option>
                    </select>
                </div>
                <AddProductTextAre
                    label="Features"
                    name="features"
                    value={prevFeatures}
                    handleInput={handleInput}
                    placeholder="Use', ' as new line"
                />
                <AddProductTextAre
                    label="Alter Names"
                    name="alterNames"
                    value={previousDetails.alterNames}
                    handleInput={handleInput}
                    placeholder="Use', ' as new line"
                />
                <AddProductInputField
                    label="Category"
                    type="text"
                    name="category"
                    handleInput={handleInput}
                    value={previousDetails.category}
                    placeholder="Enter Category"
                />
                <AddProductInputField
                    label="labelled Price"
                    type="number"
                    name="labelledPrice"
                    handleInput={handleInput}
                    value={previousDetails.labelledPrice}
                    placeholder="labelled Price"
                />
                <AddProductInputField
                    label="Price"
                    type="number"
                    name="price"
                    handleInput={handleInput}
                    value={previousDetails.price}
                    placeholder="Enter Price"
                />
                <AddProductInputField
                    label="Quantity"
                    type="number"
                    name="quantity"
                    handleInput={handleInput}
                    value={previousDetails.quantity}
                    placeholder="Enter Quantity"
                />
                <AddProductFile
                    name="image"
                    label="Product Images"
                    handleInputFile={handleInputFile}
                />
                <button
                    type="button"
                    onClick={() => {
                        handleSubmit(files);
                    }}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;
