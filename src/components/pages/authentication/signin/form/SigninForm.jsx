import { Link } from "react-router";
import { Toaster } from "react-hot-toast";
import GoogleIcon from "../../../../icons/GoogleIcon.jsx";
import FacebookIcon from "../../../../icons/FacebookIcon.jsx";
import GitiHubIcon from "../../../../icons/GitiHubIcon.jsx";

const SigninForm = ({ handleInput, handleSubmit }) => {
  return (
    <div className="bg-[url(../../../../../public/signup.jpg)] h-screen w-full bg-no-repeat flex items-center justify-center bg-cover bg-fixed">
      <div className="h-[70%] shadow-2xl rounded-2xl flex w-[50%]">
        <div className="w-full h-full flex items-center rounded-l-2xl  bg-[#33DAE9]  justify-center">
          <div className=" w-[70%] flex flex-col gap-6 ">
            <h1 className="text-4xl text-white text-start  font-bold font-serif ">
              Welcome Back to Crystal Beauty Clear.
            </h1>
            <p className="text-justify font-semibold font-[Open Sans] text-[#3a3838]">
              Log in to explore a world of radiant beauty. Shop your favorite
              skincare, makeup, and wellness products with ease. Your journey to
              clearer, glowing skin starts here.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-center backdrop-blur-sm justify-center  rounded-r-2xl">
          <form className=" w-[75%] ">
            <h1 className="text-4xl text-center bg-gradient-to-bl from-blue-700 to-[#33DAE9] bg-clip-text text-transparent font-bold font-serif ">
              Login
            </h1>
            <div className="flex mt-5 flex-col gap-2  ">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleInput}
                name="email"
                className="p-2 border-b -mt-2 outline-none border-blue-900 "
                type="email"
              />
            </div>
            <div className=" flex mt-5 flex-col gap-2  ">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleInput}
                name="password"
                className="p-2 -mt-2 border-b outline-none border-blue-900  "
                type="password"
              />
            </div>
            <div className="flex gap-2 mt-2 font-semibold ">
              <p>Don't have an account ? </p>
              <Link
                to="/authentication/signup"
                className=" transition duration-200 underline hover:text-[#33DAE9]"
              >
                Sign Up
              </Link>
            </div>
            <div className="mt-3 flex justify-center gap-6 ">
              <a href="www.google.com" target="_blank">
                <GoogleIcon />
              </a>
              <a href="www.google.com" target="_blank">
                <GitiHubIcon />
              </a>
              <a href="www.google.com" target="_blank">
                <FacebookIcon />
              </a>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className=" bg-[#33DAE9] rounded-md text-blue-950 hover:cursor-pointer hover:shadow-2xl hover:bg-blue-300 w-full p-2 mt-7 font-semibold transition duration-300 ho "
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
