import SigninForm from "./form/SigninForm.jsx";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [inputSignInDetails, setInputSignInDetails] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputSignInDetails({
      ...inputSignInDetails,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const apiToast = toast.loading("Loading...");
      const response = await axios.post(
        "/api/users/signin",
        inputSignInDetails,
      );
      toast.dismiss(apiToast);
      if (response.data.status === 401) {
        console.log(response.data.message);
        toast.error(response.data.message);
        return;
      }
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <SigninForm handleInput={handleInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignIn;
