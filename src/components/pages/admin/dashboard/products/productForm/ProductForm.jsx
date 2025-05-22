import {
    AddProductFile,
    AddProductInputField,
    AddProductTextAre,
} from '../../../../../utility/re-usable/AddProductInputField.jsx';
import { useState } from 'react';

const ProductForm = ({ handleInput, handleSubmit, errState }) => {
    const [files, setFiles] = useState([]);
    const handleInputFile = (event) => {
        setFiles(event.target.files);
    };
    return (
        <div className="w-full h-screen mt-20 ">
            <form className="max-w-sm mx-auto">
                <AddProductInputField
                    label="Product Name"
                    errState={errState.name}
                    type="text"
                    name="name"
                    handleInput={handleInput}
                    placeholder="Enter Product Name"
                />
                <AddProductInputField
                    errState={errState.brand}
                    label="Brand"
                    type="text"
                    name="brand"
                    handleInput={handleInput}
                    placeholder="Enter Brand Name"
                />
                <AddProductInputField
                    errState=""
                    label="Alter Names"
                    type="text"
                    name="alterNames"
                    handleInput={handleInput}
                    placeholder="Use ', ' as new line "
                />
                <AddProductTextAre
                    label="Features"
                    errState={errState.descriptionStatement}
                    name="features"
                    handleInput={handleInput}
                    placeholder="Use', ' as new line "
                />
                <AddProductInputField
                    errState={errState.category}
                    label="Category"
                    type="text"
                    name="category"
                    handleInput={handleInput}
                    placeholder="Enter Category"
                />
                <AddProductInputField
                    errState={errState.labelledPrice}
                    label="labelled Price"
                    type="number"
                    name="labelledPrice"
                    handleInput={handleInput}
                    placeholder="labelled Price"
                />
                <AddProductInputField
                    errState={errState.price}
                    label="Price"
                    type="number"
                    name="price"
                    handleInput={handleInput}
                    placeholder="Enter Price"
                />
                <AddProductInputField
                    errState={errState.quantity}
                    label="Quantity"
                    type="number"
                    name="quantity"
                    handleInput={handleInput}
                    placeholder="Enter Quantity"
                />
                <AddProductFile
                    errState={errState.images}
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

export default ProductForm;
