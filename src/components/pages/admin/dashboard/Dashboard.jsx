import DashboardNavigation from "./navigation/DashboardNavigation.jsx";
import { Route, Routes } from "react-router";
import Products from "./products/Products.jsx";
import Users from "./users/Users.jsx";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavigation />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Dashboard;