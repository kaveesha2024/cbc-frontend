import DashboardNavigation from "./navigation/DashboardNavigation.jsx";
import { Route, Routes, useNavigate } from "react-router";
import Products from "./products/Products.jsx";
import Users from "./users/Users.jsx";
import AddProduct from "./products/addProduct/AddProduct.jsx";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <DashboardNavigation handleLogout={handleLogout} />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct  />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Dashboard;