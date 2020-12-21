import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Slides from "./components/Slides";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Slides />
      <Header />
    </div>
  );
}
