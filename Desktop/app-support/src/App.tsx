import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import OTPVerification from "./pages/OTPVerification";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* <Route path="/STBAppsuppot/login" element={<Login />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/otpverificationpage" element={<OTPVerification />} />
      </Routes>
    </>
  );
}

export default App;
