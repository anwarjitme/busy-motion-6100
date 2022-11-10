import { Routes, Route } from "react-router-dom";
import { Beauty } from "./Pages/Beauty";
import { Cart } from "./Pages/Cart";
import Fav from "./Pages/Fav";
import { Kids } from "./Pages/Kids";
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import More from "./Pages/More"
import Shoes_Bags from "./Pages/Shoes & Bags"
import SignIn from "./Pages/SignIn"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tools" element={<Tools />}></Route>
      <Route path="/channels" element={<Channels />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default AllRoutes;
