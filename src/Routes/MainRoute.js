import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Login from "../components/Login/Login";
import Home from "../Pages/Home/Home";
import ProtectedRoute from "../Routes/ProtectedRoute";
import OtpSignIn from "../components/OtpSignIn/OtpSignIn";
import Otp from "../components/OtpSignIn/Otp";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
// import AddBooking from "../Pages/Booking/AddBooking";
// import Booking from "../Pages/Booking/Booking";
import Navbar from "../components/Navbar/Navbar";
import BNav from "../components/BNavbar/BNav";
import Contact from "../Pages/Contact/Contact";
import Report from "../Pages/Report/Report";
import Privacy from "../Pages/Additional/Privacy";
import Terms from "../Pages/Additional/Terms";

const MainRoute = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/OtpSignIn" element={<OtpSignIn />} />
            <Route path="/Otp" element={<Otp />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route
              path="/Home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Report"
              element={
                <ProtectedRoute>
                  <Report />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Privacy"
              element={
                <ProtectedRoute>
                  <Privacy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Terms"
              element={
                <ProtectedRoute>
                  <Terms />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="Booking"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </Router>
        {/*   <BNav /> */}
      </UserAuthContextProvider>
    </>
  );
};

export default MainRoute;
