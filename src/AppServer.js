import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserPosts from "./pages/UserPosts";
import NotFound from "./pages/NotFound";
import HeaderComponent from "./components/HeaderComponent";

import "./App.css";

const AppServer = () => {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id/posts" element={<UserPosts />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppServer;
