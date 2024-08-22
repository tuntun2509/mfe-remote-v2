import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => (
  <>
    <Header />
    <Footer />
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
