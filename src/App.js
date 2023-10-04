import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./component/Protected";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Navbar from "./component/Header/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
