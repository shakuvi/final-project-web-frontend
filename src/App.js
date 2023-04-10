import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import NoPage from "./pages/NoPage";
import OrderDashboard from "./pages/OrderDashboard";
import UserDashBoard from "./pages/UserDashBoard";
import ReviewsDashboard from "./pages/ReviewsDashboard";
import FoodManageDashbaord from "./pages/FoodManageDashbaord";
// import PaymentDashboard from "./pages/PaymentDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/orders" element={<OrderDashboard />} />
          <Route path="/employees" element={<UserDashBoard />} />
          <Route path="/reviews" element={<ReviewsDashboard />} />
          <Route path="/foods" element={<FoodManageDashbaord />} />
          {/* <Route path="/payment" element={<PaymentDashboard />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
