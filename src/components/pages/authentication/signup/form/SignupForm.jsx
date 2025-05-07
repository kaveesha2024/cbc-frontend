import SignInput from "../re-usable/SignInput.jsx";
import { Link } from "react-router";
import GoogleIcon from "../../../../icons/GoogleIcon.jsx";
import GitiHubIcon from "../../../../icons/GitiHubIcon.jsx";
import FacebookIcon from "../../../../icons/FacebookIcon.jsx";

const SignupForm = ({
  handleInputChange,
  handleSubmit,
  signupInputDetails,
}) => {
  return (
    <div className="bg-[url(../../../../../public/signup.jpg)] h-screen w-full bg-no-repeat flex items-center justify-center bg-cover bg-fixed">
      <div className=" h-[90%] shadow-2xl border border-amber-50 rounded-2xl  flex justify-center items-center w-[50%]">
        <div className="w-full flex items-center rounded-l-2xl h-full bg-[#33DAE9]  justify-center">
          <div className=" w-[70%] flex flex-col gap-6 ">
            <h1 className="text-4xl text-white text-start  font-bold font-serif ">
              Join the Crystal Beauty Clear Family.
            </h1>
            <p className="text-justify font-semibold font-[Open Sans] text-[#3a3838]">
              Create your account to unlock exclusive beauty deals, personalized
              skincare tips, and the latest cosmetic trends. Sign up today and
              start your journey to a more confident, glowing you.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-center backdrop-blur-sm  justify-center  rounded-r-2xl">
          <form className=" w-[75%] ">
            <h1 className="text-4xl text-center bg-gradient-to-bl from-blue-700 to-[#33DAE9] bg-clip-text text-transparent font-bold font-serif ">
              Sign UP
            </h1>

            <SignInput
              signupInputDetails={signupInputDetails.firstName}
              handleInputChange={handleInputChange}
              type="text"
              label="First Name"
              name="firstName"
            />
            <SignInput
              signupInputDetails={signupInputDetails.lastName}
              handleInputChange={handleInputChange}
              type="text"
              label="Last Name"
              name="lastName"
            />
            <SignInput
              signupInputDetails={signupInputDetails.phoneNumber}
              handleInputChange={handleInputChange}
              type="text"
              label="Phone Number"
              name="phoneNumber"
            />
            <SignInput
              signupInputDetails={signupInputDetails.email}
              handleInputChange={handleInputChange}
              type="email"
              label="Email Address"
              name="email"
            />
            <SignInput
              signupInputDetails={signupInputDetails.password}
              handleInputChange={handleInputChange}
              type="password"
              label="Password"
              name="password"
            />

            <div className="flex gap-2 mt-2 font-semibold ">
              <p>Already have an account ? </p>
              <Link
                to="/authentication/signin"
                className=" transition duration-200 underline hover:text-[#33DAE9]"
              >
                Sign In
              </Link>
            </div>
            <div className=" mt-3 flex justify-center gap-6 ">
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
                className=" bg-[#33DAE9] rounded-md text-blue-950 hover:cursor-pointer hover:shadow-2xl hover:bg-blue-300 w-full p-2 mt-5 font-semibold transition duration-300 ho "
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

export default SignupForm;
