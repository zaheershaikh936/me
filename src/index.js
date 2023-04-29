//import logo from './logo.svg';
import "./App.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treatments from "./Treatments";
import CustomerReview from "./CustomerReview";
import Features from "./Features";
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
        <Route path="/customer" element={<CustomerReview />} />
      </Routes>
    </BrowserRouter>
);