import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { About } from "./components/About/About";
import Team from "./components/Team/Team";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Footer1 from "./components/Footer/Footer1";
import Contacts from "./components/Contacts/Contacts";
import Reviews from "./components/Reviews/Reviews";
import Register from "./components/LogIn/Register";
import LogIn from "./components/LogIn/LogIn";
import NewsLetters from "./components/NewsLetters/Newsletters";
import Details from "./components/Catalog/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/catalog/item" element={<Details />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <NewsLetters />
      <Footer1 />
    </>
  );
}

export default App;
