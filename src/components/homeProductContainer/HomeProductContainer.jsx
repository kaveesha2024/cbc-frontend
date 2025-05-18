const HomeProductContainer = () => {
    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center">
            <div className="w-[320px] h-[500px] shadow hover:shadow-2xl  transition duration-200 cursor-pointer p-2 rounded-lg">
                <div className="rounded-lg w-full h-[50%]">
                    <img src={'https://flowbite.com/docs/images/products/apple-watch.png'} alt="" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-2xl">Fair and Lovely</p>
                    <p className="text-start font-thin line-clamp-3  h-[70px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates consectetur dignissimos eaque minima saepe commodi deserunt, atque ullam nisi quasi vitae totam ipsum ipsa nam eum doloribus, quibusdam quo magnam!</p>
                    <div className="flex flex-col ">
                        <span className="text-accent text-xl font-bold">LKR 900.00</span>
                        <span className="line-through font-thin">LKR 990.00</span>
                    </div>
                    <div className="flex justify-end ">
                        <button className="bg-accent p-2 text-primary rounded-sm cursor-pointer">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeProductContainer;
{/* productId, name, alterNames, description[], brand, images[], labelledPrice, price, discounts, category, isAvailable */ }