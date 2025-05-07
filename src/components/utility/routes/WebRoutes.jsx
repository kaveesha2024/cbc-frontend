import { Route, Routes } from "react-router"
import App from "../../../App.jsx";
import SignIn from "../../pages/authentication/signin/SignIn.js";

const WebRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/authentication/signup" element={<SignIn />} />
        </Routes>
     );
}

export default WebRoutes;