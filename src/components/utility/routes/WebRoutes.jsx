import { Navigate, Route, Routes } from 'react-router';
import App from '../../../App.jsx';
import SignIn from '../../pages/authentication/signin/SignIn.jsx';
import Signup from '../../pages/authentication/signup/Signup.jsx';
import axios from 'axios';
import Dashboard from '../../pages/admin/dashboard/Dashboard.jsx';
import ProductOverView from '../../pages/productOverView/ProductOverView.jsx';
import NavBar from '../../navigationBar/NavBar.jsx';

axios.defaults.baseURL = 'http://localhost:5000';
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
const WebRoutes = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/authentication/signin" element={<SignIn />} />
                <Route path="/authentication/signup" element={<Signup />} />
                <Route path="/view/product/:id" element={<ProductOverView />} />
                <Route
                    path="/dashboard/*"
                    element={
                        localStorage.getItem('isAdmin') === 'true' ? (
                            <Dashboard />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
            </Routes>
        </div>
    );
};

export default WebRoutes;
