const Hero = () => {
    return (
        <div className="bg-purple-400 w-full h-full">
            <div className="bg-secondary h-[40px] w-full"></div>
            <div className="w-full h-[85vh] bg-cover bg-no-repeat bg-center bg-[url('https://weoppevrfepyewscspot.supabase.co/storage/v1/object/public/images//cosmetic-brush-cloud-pink-powder-dark-background.jpg')]">
                <div className="h-full w-full bg-secondary/50 flex flex-col justify-center items-start px-20 text-primary">
                    <div className="w-[50%] flex flex-col justify-center items-start">
                        <h1 className="text-6xl  font-bold mt-10">Welcome to <br /> <span className="text-accent">Cristal Beauty Clear</span></h1>
                        <p className="text-center mt-4">Your one-stop shop for all your needs!</p>
                        <p className="text-center mt-4">Explore our wide range of products and enjoy shopping!</p>
                    </div>
                </div>
            </div>
            <div className="bg-secondary h-[40px] w-full"></div>
        </div>
    );
};
export default Hero;