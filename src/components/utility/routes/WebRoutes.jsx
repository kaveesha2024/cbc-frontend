import { Route, Routes } from "react-router"
import App from "../../../App.jsx";
import Signup from "../../pages/authentication/signup/Signup.jsx";

const WebRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/authentication/signup" element={<Signup />} />
        </Routes>
     );
}

export default WebRoutes;