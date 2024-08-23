import React, { useEffect } from "react";
import {
  BrowserRouter,
  createMemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createMemoryHistory } from "history";

import Footer from "./components/footer";
import { Home } from "./components/home";
import { Test1 } from "./components/test1";
import { Test2 } from "./components/test2";
import Header from "./components/header";

const LayoutApp = () => {
  const history = createMemoryHistory();
  return (
    <>
      <BrowserRouter basename="remote">
        <Header />
        <Routes location={history.location}>
          <Route path="/" element={<Home />} />
          <Route path="/test1/" element={<Test1 />} />
          <Route path="/test2/" element={<Test2 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default LayoutApp;
