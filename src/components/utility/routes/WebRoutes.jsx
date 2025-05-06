import { Route, Routes } from "react-router"
import App from "../../../App.jsx";

const WebRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
     );
}

export default WebRoutes;