import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Dashboard from "./Pages/Dashboard";
import Account from "./Pages/Account";
import Base from "./Component/Layouts/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:900})
function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Base>
            <Routes>
              <Route  path="/dashboard" element={<Dashboard />} />
              <Route  path="/account" element={<Account/>} />
            </Routes>
          </Base>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
