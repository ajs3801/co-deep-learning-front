import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing.components";
import Main from "./pages/main/Main.components";
import FindFamily from "./pages/FindFamily/FindFamily.components";
import Login from "./pages/login/Login.components";
import Register from "./pages/register/Register.components";
import RegisterCreate from "./pages/RegisterCreate/RegisterCreate.components";
import QuickAnswer from "./pages/QuickAnswer/QuickAnswer.components";
import EditPlan from "./pages/EditPlan/EditPlan.components";
import SendAnswer from "./pages/SendAnswer/SendAnswer.components";
import DoAnswer from "./pages/doAnswer/DoAnswer.components";
import ChangeFamilyName from "./pages/ChangeFamilyName/ChangeFamilyName.components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/find" element={<FindFamily />}/>
        <Route path="/main/answer" element={<QuickAnswer />}/>
        <Route path="/main/plan" element={<EditPlan />} />
        <Route path="/main/request" element={<SendAnswer />}/>
        <Route path="/main/doAnswer" element={<DoAnswer />}/>
        <Route path="/main/change" element={<ChangeFamilyName />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/register/create" element={<RegisterCreate />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
