import React from "react";
import { ToastContainer, toast } from "react-toastify";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const openToast = () => toast("Wow so easy !");
  return (
    <div className="App">
      <button onClick={openToast}>click</button>
      <ToastContainer />
    </div>
  );
}

export default App;
