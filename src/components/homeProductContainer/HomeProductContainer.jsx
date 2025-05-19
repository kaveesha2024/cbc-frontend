import { useNavigate } from "react-router";
const HomeProductContainer = ({ products }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full my-20 flex flex-wrap justify-center gap-10 items-center">
            {
                products.length > 0 && products.map((product, index) => (
                    <div key={index} className="w-[320px] h-[550px] shadow hover:shadow-2xl  transition duration-200 p-2 rounded-lg">
                        <div className="rounded-lg w-full mb-5 h-[50%]">
                            <img onClick={() => { navigate(`view/product/${product.productId}`) }} className="max-h-full min-h-full cursor-pointer max-w-full min-w-full" src={product.images[0]} alt="image" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-2xl">{product.name}</p>
                            <p className="text-start font-thin line-clamp-3  h-[70px]">{product.description[0]}</p>
                            <div className="flex flex-col ">
                                <span className="text-accent text-xl font-bold">LKR {product.price}.00</span>
                                <span className="line-through font-thin">LKR {product.labelledPrice}.00</span>
                            </div>
                            <div className="flex justify-end items-center">
                                <button className="bg-accent p-2 text-primary rounded-sm cursor-pointer">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
export default HomeProductContainer;
{/* productId, name, alterNames, description[], brand, images[], labelledPrice, price, discounts, category, isAvailable */ }