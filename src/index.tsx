import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Styles";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Feed from "./Pages/Feed";
import Cadastrar from "./Pages/Cadastrar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
     </Routes >
  </Router>
);
