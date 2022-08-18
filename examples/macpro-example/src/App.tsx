import React from "react";
import "@enterprise-cmcs/macpro-ux-lib/build/assets/css/index.css";
import { Typography, Logo } from "@enterprise-cmcs/macpro-ux-lib";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Typography as="p">Houston, we have liftoff!</Typography>
      <Logo source={logo} altText="Test Logo" />
    </div>
  );
}

export default App;
