import React from "react";
import Sectioning from "./components/Sectioning";
import "./App.css";

function App() {
  return (
    <div>
      <Sectioning type={["default", "outline", "text"]} />
      <Sectioning type={["disabled", "text_disabled"]} />
      <Sectioning type={["left", "right"]} cart />
      <Sectioning type={["sm", "md", "lg"]} />.
      <Sectioning type={["default", "primary", "secondary", "danger"]} />
    </div>
  );
}

export default App;
