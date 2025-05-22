import { useState } from 'react';
import { GrStatusGood } from 'react-icons/gr';

const ProductOverViewPage = ({ product }) => {
    const [currentPicture, setCurrentPicture] = useState(product.images[0]);
    console.log(product.features);
    return (
        <div className="flex w-full h-[88vh] px-20">
            <div className="w-[50%] h-full p-7">
                <div className="w-full shadow-2xl bg-white h-[80%] rounded-t-lg ">
                    <img
                        className="w-full rounded-t-lg h-full object-cover"
                        src={currentPicture}
                        alt="image"
                    />
                </div>
                <div className="w-full h-[25%] border-transparent shadow-2xl bg-white flex justify-center items-center overflow-x-auto ">
                    {product.images.map((image, index) => (
                        <div key={index} className=" rounded-md object-cover">
                            <img
                                onMouseEnter={() => {
                                    setCurrentPicture(image);
                                }}
                                key={index}
                                className={
                                    'w-[150px] shadow-2xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-2xl hover:outline-4 outline-accent roun ml-2 h-[130px] object-cover' +
                                    (image === currentPicture && ' outline-4 outline-accent')
                                }
                                src={image}
                                alt="no image found!"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-[50%] h-full flex justify-center gap-3 flex-col items-start px-2">
                <div>
                    <h1 className="font-bold text-6xl">{product.name}</h1>
                    <p className="text-black/20 text-sm font-serif">
                        Product Id: <span className="font-sans">{product.productId}</span>
                    </p>
                </div>
                <div>
                    {product.price <= product.labelledPrice ? (
                        <div>
                            <span className="text-4xl text-accent font-bold">
                                LKR {product.price.toFixed(2)}
                            </span>
                            <span className=" ml-2 font-semibold text-xl line-through">
                                LKR {product.labelledPrice.toFixed(2)}
                            </span>
                        </div>
                    ) : (
                        <span className="text-4xl text-accent font-bold">
                            LKR {product.price.toFixed(2)}
                        </span>
                    )}
                </div>
                <div className="mb-2">
                    <p className="text-xl font-semibold italic">Features</p>
                    <ul className="list-disc list-inside">
                        {product.features.length > 0 &&
                            product.features.map((feature, index) => (
                                <li className="ml-2  text-black/60" key={index}>
                                    {feature}
                                </li>
                            ))}
                    </ul>
                </div>
                <p className="font-bold text-lg">
                    {product.isAvailable ? (
                        <span className="text-green-500 flex justify-center items-center gap-2">
                            <GrStatusGood className="text-xl" />
                            In Stock
                        </span>
                    ) : (
                        <span className="text-red-500">Out of Stock</span>
                    )}
                </p>
                <div className="flex justify-evenly my-10 items-center gap-2 w-full">
                    <button className="bg-accent w-[200px] py-3 rounded-sm shadow-2xl active:bg-pink-800 text-xl hover:shadow-2xl font-bold cursor-pointer text-primary">
                        Add to Cart
                    </button>
                    <button className="bg-accent w-[200px] py-3 rounded-sm shadow-2xl active:bg-pink-800 text-xl hover:shadow-2xl font-bold cursor-pointer text-primary">
                        Buy Now
                    </button>
                </div>
                <p className="text-black/70 text-sm font-serif">Category: {product.category}</p>
            </div>
        </div>
    );
};

export default ProductOverViewPage;
