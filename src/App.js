import { Routes, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";

import HomePage from "./pages/homepage/homepage.component";
// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
