import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";

const Users = React.lazy(() => import("./Pages/Users"));
const UsersProfile = React.lazy(() => import("./Pages/UserProfile"));
const Auth = () => {
  return (
    <>
      <Header />
      <SideNav />
      <Routes>
        <Route path="login" element={<Navigate to="/" />} />
        <Route path="/" element={<Navigate to="users" />} />
        <Route
          path="users"
          element={
            <React.Suspense fallback={<></>}>
              <Users />
            </React.Suspense>
          }
        />
        <Route
          path="users/profile"
          element={
            <React.Suspense fallback={<></>}>
              <UsersProfile />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Auth;
