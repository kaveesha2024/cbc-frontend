import { Route, Routes } from "react-router"
import App from "../../../App.jsx";
import SignIn from "../../pages/authentication/signin/SignIn.js";
import Signup from "../../pages/authentication/signup/Signup.js";

const WebRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/authentication/signin" element={<SignIn />} />
            <Route path="/authentication/signup" element={<Signup />} />
        </Routes>
     );
}

export default WebRoutes;