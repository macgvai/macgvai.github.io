import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/about/about";
import Portfolio from "../pages/portfolio/portfolio";
import Experience from "../pages/experience/experience";
import { GlobalStyle } from "./styles";
import Layout from "../layout/layout";

function App({ portfolioData }) {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />}></Route>
            <Route
              path="/portfolio"
              element={<Portfolio portfolioData={portfolioData} />}
            ></Route>
            <Route path="/experience" element={<Experience />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
