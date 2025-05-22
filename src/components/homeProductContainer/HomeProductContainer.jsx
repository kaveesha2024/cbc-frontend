import { useNavigate } from 'react-router';

const HomeProductContainer = ({ products }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full my-10 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 items-center">
            {products.length > 0 &&
                products.map((product, index) => (
                    <div
                        key={index}
                        className="w-full max-w-xs sm:w-[320px] h-[500px] sm:h-[550px] shadow hover:shadow-2xl transition duration-200 p-2 rounded-lg flex flex-col"
                    >
                        <div className="rounded-lg w-full mb-4 h-48 sm:h-[50%] flex items-center justify-center">
                            <img
                                onClick={() => {
                                    navigate(`view/product/${product.productId}`);
                                }}
                                className="object-contain h-full w-full cursor-pointer rounded-lg"
                                src={product.images[0]}
                                alt="image"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <p className="font-bold text-lg sm:text-2xl line-clamp-1">
                                {product.name}
                            </p>
                            <p className="text-start font-thin line-clamp-3 h-14 sm:h-[70px] text-sm sm:text-base">
                                {product.features[0]}
                            </p>
                            <div className="flex flex-col">
                                <span className="text-accent text-base sm:text-xl font-bold">
                                    LKR {product.price.toFixed(2)}
                                </span>
                                <span className="line-through font-thin text-xs sm:text-base">
                                    LKR {product.labelledPrice.toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-end items-center mt-auto">
                                <button
                                    onClick={() => {
                                        navigate(`view/product/${product.productId}`);
                                    }}
                                    className="bg-accent p-2 text-primary rounded-sm cursor-pointer text-xs sm:text-base"
                                >
                                    View Product
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
export default HomeProductContainer;
