import AddIcon from '../../../../icons/AddIcon.jsx';
import { useNavigate } from 'react-router';

const TableProducts = ({ products, getReviewByIndex, handleDeleteProduct }) => {
    const navigation = useNavigate();
    console.log(products);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Brand
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Availability
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Labelled Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Images
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Alternative Names
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Features
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Reviews
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                            >
                                <td className="px-6 py-4">{product.productId}</td>
                                <td className="px-6 py-4">{product.name}</td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">{product.brand}</td>
                                <td className="px-6 py-4">
                                    {product.isAvailable ? (
                                        <span className="font-semibold text-green-500">
                                            in stock
                                        </span>
                                    ) : (
                                        <span className="font-semibold text-red-500">
                                            out of stock
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4">{product.labelledPrice}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4">{product.quantity}</td>
                                <td className="px-6 py-4">
                                    <div className=" w-15 h-15">
                                        <img src={product.images[0]} alt="img" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">{product.alterNames.join(', ')}</td>
                                <td className="px-6 py-4">{product.features.join(', ')}</td>
                                <td className="px-6 py-4">
                                    {product.reviews.length > 0 ? (
                                        <button
                                            onClick={() => {
                                                getReviewByIndex(index, product.reviews);
                                            }}
                                            className="bg-blue-300 p-3 rounded-sm hover:cursor-pointer"
                                        >
                                            view
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            type="button"
                                            className="bg-blue-300 p-3 rounded-sm hover:cursor-not-allowed"
                                        >
                                            Empty
                                        </button>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => {
                                                navigation('update', { state: product });
                                            }}
                                            className="bg-blue-500 p-2 ml-2 rounded-sm text-white font-semibold hover:cursor-pointer"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleDeleteProduct(product.productId);
                                            }}
                                            className="bg-red-500 p-2 ml-2 rounded-sm text-white font-semibold hover:cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4">No products found !</td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button
                onClick={() => {
                    navigation('/dashboard/products/add');
                }}
                className="bg-green-500 fixed bottom-10 right-5 flex items-center justify-center shadow-2xl hover:cursor-pointer transition duration-300  focus:bg-red-500 w-11 h-11 rounded-full"
            >
                {<AddIcon />}
            </button>
        </div>
    );
};

export default TableProducts;
