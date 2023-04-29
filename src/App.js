//import logo from './logo.svg';
import React from "react";

import "./App.css";
import Treatments from './Treatments';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Treatments />
      <Footer />
    </React.StrictMode>
  );
}
export default App;


