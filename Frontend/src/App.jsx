import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Home/Home";
import Women from "./assets/Women/Women";
import Men from "./assets/Men/Men.jsx";
import Kids from "./assets/Kids/Kids.jsx";
import New from "./assets/NewArraival/NewArraival.jsx";
import Signup from "./assets/Signup/Signup.jsx";
import LogIn from "./assets/LogIn/LogIn.jsx";
import AboutUs from "./assets/AboutUs/AboutUs.jsx";
import Add from "./assets/add/add.jsx";
import Cart from "./assets/Cart/Cart.jsx";

function App(){
  return(

      <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Women" element={<Women/>}/>
         <Route path="/Men" element={<Men/>}/>
         <Route path="/Kids" element={<Kids/>}/>
         <Route path="/login" element={<LogIn/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/NewArraival" element={<New/>}></Route>
         <Route path="/AboutUs" element={<AboutUs/>}></Route>
         <Route path="/additem" element={<Add/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         
      </Routes>
      </Router>
    
  );
};

export default App;
