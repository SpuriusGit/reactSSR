import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserPosts from "./pages/UserPosts";
import UserAlbums from "./pages/UserAlbums";
import UserAlbumPhotos from "./pages/UserAlbumPhotos";
import NotFound from "./pages/NotFound";
import HeaderComponent from "./components/HeaderComponent";

import "bootstrap/dist/css/bootstrap.min.css";

const AppServer = () => {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id/posts" element={<UserPosts />}></Route>
        <Route path="/users/:id/albums" element={<UserAlbums />} />
        <Route
          path="/users/:userId/albums/:albumId/photos"
          element={<UserAlbumPhotos />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppServer;
