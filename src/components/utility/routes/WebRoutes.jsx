import { Navigate, Route, Routes } from "react-router";
import App from "../../../App.jsx";
import SignIn from "../../pages/authentication/signin/SignIn.jsx";
import Signup from "../../pages/authentication/signup/Signup.jsx";
import axios from "axios";
import Dashboard from "../../pages/admin/dashboard/Dashboard.jsx";
import Products from "../../pages/admin/dashboard/products/Products.jsx";

axios.defaults.baseURL = "http://localhost:5000";
const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/authentication/signin" element={<SignIn />} />
      <Route path="/authentication/signup" element={<Signup />} />
      <Route path="/dashboard/*" element={localStorage.getItem("isAdmin") ? <Dashboard /> : <Navigate to="/" /> } />
    </Routes>
  );
};

export default WebRoutes;
