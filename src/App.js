import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Welcome to the Lab!</h1>
        <p>
          This page will contain a directory of site projects. Deployed via k8s!
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
