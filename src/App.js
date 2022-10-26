import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Dashboard from "./Pages/Dashboard";
import Base from "./Component/Layouts/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Base>
            <Routes>
              <Route index path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Base>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
