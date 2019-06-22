import React from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar.jsx";

export function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
