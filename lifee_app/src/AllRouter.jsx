import React from "react";
import Beauty from "./Components/Beauty";
import Cart from "./Components/Cart";
import Kid from "./Components/Kid";
import Men from "./Components/Men";
import More from "./Components/More";
import Shoe from "./Components/Shoe";
import SignUp from "./Components/SignUp";
import Wish from "./Components/Wish";
import Women from "./Components/Women";
import { Routes, Route } from "react-router-dom";

const AllRouter = () => {
  return;
  <Routes>
    <Route path="/" element={<Women />}></Route>
    <Route path="/men" element={<Men />}></Route>
    <Route path="/kid" element={<Kid />}></Route>
    <Route path="/shoe" element={<Shoe />}></Route>
    <Route path="/beauty" element={<Beauty />}></Route>
    <Route path="/more" element={<More />}></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/wish" element={<Wish />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
  </Routes>;
};

export default AllRouter;
