import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import WebRoutes from "./components/utility/routes/WebRoutes.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Toaster />
      <BrowserRouter>
        <WebRoutes />
      </BrowserRouter>
    </div>
  </StrictMode>,
);
