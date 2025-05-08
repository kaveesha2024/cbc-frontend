import SignupForm from "./form/SignupForm.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { generateSalt } from "../../../utility/commonFunctionalities/CommonFunctions.js";

const Signup = () => {
  const navigate = useNavigate();
  const [signupInputDetails, setSignupInputDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    salt: "",
  });
  useEffect(() => {
    const salt = generateSalt();
    setSignupInputDetails({
      ...signupInputDetails,
      salt,
    });
  }, [])
  const handleInputChange = event => {
    const { name, value } = event.target;
    setSignupInputDetails({
      ...signupInputDetails,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    let signUpToast;
    try{
      signUpToast = toast.loading("Loading...");
      const signupResponse = await axios.post('/api/users/signup', signupInputDetails);
      if (signupResponse.data.status === 200){
        const loginDetails = {
          email:  signupInputDetails.email,
          password: signupInputDetails.password,
        }
        try{
          const signInResponse = await axios.post('/api/users/signin', loginDetails);
          if (signInResponse.data.token) {
            localStorage.setItem("token", signInResponse.data.token);
            navigate('/');
            toast.dismiss(signUpToast);
            return;
          }
          toast.dismiss(signUpToast);
          toast.error(signInResponse.data.message);
        }catch (err) {
          toast.dismiss(signUpToast);
          console.log(err);
          toast.error("Please Try Again");
        }return;
      }
      toast.dismiss(signUpToast);
      toast.error(signupResponse.data.message);
    }catch(err) {
      toast.dismiss(signUpToast);
      toast.error("Please Try Again");
      console.log(err);
    }
  };
    return (
        <SignupForm signupInputDetails={signupInputDetails} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    );
};

export default Signup;