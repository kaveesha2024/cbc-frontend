import {Link} from "react-router";

const SignIn = () => {
    return (
        <div className="bg-[url(../../../../../public/signup.jpg)] h-screen w-full bg-no-repeat flex items-center justify-center bg-cover bg-fixed">
            <div className="h-[50%] shadow-2xl rounded-2xl flex w-[50%]">
                <div className="w-full h-full flex items-center rounded-l-2xl  bg-[#33DAE9]  justify-center">
                    <div className=" w-[70%] flex flex-col gap-6 ">
                        <h1 className="text-4xl text-white text-start  font-bold font-serif ">
                            Welcome Back to Crystal Beauty Clear.
                        </h1>
                        <p className="text-justify font-semibold font-[Open Sans] text-[#3a3838]">
                            Log in to explore a world of radiant beauty. Shop your favorite skincare, makeup, and wellness products with ease. Your journey to clearer, glowing skin starts here.
                        </p>
                    </div>
                </div>
                <div className="w-full h-full flex items-center backdrop-blur-3xl  justify-center  rounded-r-2xl">
                    <form className=" w-[75%] ">
                        <h1 className="text-4xl text-center bg-gradient-to-bl from-blue-700 to-[#33DAE9] bg-clip-text text-transparent font-bold font-serif ">
                            Login
                        </h1>
                        <div className="flex mt-5 flex-col gap-2  ">
                            <label className='font-semibold' htmlFor="email">Email</label>
                            <input className="p-2 border-b outline-none border-blue-900 " type="email" />
                        </div>
                        <div className=" flex mt-5 flex-col gap-2  ">
                            <label  className='font-semibold' htmlFor="password">Password</label>
                            <input className="p-2 border-b outline-none border-blue-900  " type="password" />
                        </div>
                        <div className="flex gap-2 mt-2 font-semibold ">
                            <p>Don't have an account ? </p>
                            <Link to='/authentication/signup' className=" transition duration-200 underline hover:text-[#33DAE9]">Sign Up</Link>
                        </div>
                        <div  className=" mt-3 flex justify-center gap-6 ">
                            <a href="www.google.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" width="24" height="24" color="currentColor" viewBox="0 0 512 512">
                                    <path
                                        d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"/>
                                </svg>
                            </a>
                            <a href="www.google.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg"  className="ionicon" width="24" height="24" color="currentColor"  viewBox="0 0 512 512">
                                    <path
                                        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
                                </svg>
                            </a>
                            <a href="www.google.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" color="currentColor" className="ionicon" viewBox="0 0 512 512">
                                    <path
                                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                                        fill-rule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <button className=" bg-[#33DAE9] rounded-md text-blue-950 hover:cursor-pointer hover:shadow-2xl hover:bg-blue-300 w-full p-2 mt-5 font-semibold transition duration-300 ho " type="button">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;