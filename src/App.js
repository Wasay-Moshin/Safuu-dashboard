import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Dashboard from "./Pages/Dashboard";
import Account from "./Pages/Account";
import Swap from "./Pages/Swap";
import Calculator from "./Pages/Calculator";
import Analytics from "./Pages/Analytics";
import Base from "./Component/Layouts/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 900 });
function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Base>
            <Routes>
              <Route index path="/dashboard" element={<Dashboard />} />
              <Route index path="/account" element={<Account />} />
              <Route index path="/swap" element={<Swap />} />
              <Route index path="/cal" element={<Calculator />} />
              <Route index path="/analytic" element={<Analytics />} />
            </Routes>
          </Base>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
