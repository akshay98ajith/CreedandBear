import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import "./template.scss";
import "./styles.scss";

// const Users = React.lazy(() => import("./Pages/Users"));
const Login = React.lazy(() => import("./Pages/Login"));

function App() {
  if (!sessionStorage.getItem("token")) {
    return (
      <Routes>
        <Route path="/users" element={<Navigate to="/" />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route
          path="login"
          element={
            <React.Suspense fallback={<></>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    return (
      <>
        <Auth />
      </>
    );
  }
}

export default App;
