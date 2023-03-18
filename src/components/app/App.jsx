import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import About from "../pages/about/about";
import Portfolio from "../pages/portfolio/portfolio";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
