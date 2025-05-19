import { GrStatusGood } from 'react-icons/gr';

const ProductOverViewPage = ({ product }) => {
    return (
        <div className="w-full px-4 py-5 sm:px-10 md:px-20 md:py-10">
            <div className=" w-full flex flex-col md:flex-row h-full rounded-lg overflow-hidden">
                <div className=" flex justify-center items-center w-full md:w-1/2 h-64 md:h-auto">
                    <img
                        className="w-[80%] md:min-w-[70%] md:max-w-[70%] md:min-h-[70%] md:max-h-[70%] rounded-xl object-contain"
                        src={product.images[0]}
                        alt="no image found"
                    />
                </div>
                <div className="p-5 md:p-10 w-full md:w-1/2 flex items-center">
                    <div className="w-full bg-aber-100 flex flex-col justify-center items-start">
                        <div>
                            <p className="text-2xl md:text-5xl font-bold mb-2 break-words">
                                {product.name}
                            </p>
                            <p className="text-black/20 mb-6 text-xs md:text-base">
                                <span>Product ID: </span>
                                {product.productId}
                            </p>
                            <p>
                                <span className="text-xl md:text-4xl font-bold">
                                    LKR {product.price}
                                </span>{' '}
                                <span className="text-black/50 line-through text-base md:text-xl">
                                    LKR {product.labelledPrice}
                                </span>
                            </p>
                        </div>
                        <div className="my-3">
                            <p className="font-semibold mb-3">Key Features</p>
                            <ul className="space-y-2">
                                {product.description.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-gray-600 text-sm md:text-base"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#F6339A] rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-xs md:text-sm font-semibold flex flex-col gap-2">
                            <p className="flex items-center gap-1">
                                availability:
                                <span className="text-green-500 flex items-center gap-1">
                                    <GrStatusGood className="text-base md:text-lg" />
                                    In stocks({product.quantity} units)
                                </span>
                            </p>
                        </div>
                        <button className="bg-accent w-full py-2 rounded-sm text-primary font-bold mt-6 md:mt-10 transition duration-300 hover:shadow-2xl cursor-pointer">
                            Add to Cart
                        </button>
                        <p className="text-black/50 text-xs md:text-sm mt-5">
                            Category: Photography
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverViewPage;
