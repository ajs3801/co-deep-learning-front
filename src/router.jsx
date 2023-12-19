import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing.components";
import Main from "./pages/main/Main.components";
import Login from "./pages/login/Login.components";
import Register from "./pages/register/Register.components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
