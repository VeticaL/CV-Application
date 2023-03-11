import "./App.css";
import React from "react";
import General from "./components/general";
import Education from "./components/educational";
import Practical from "./components/practical";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>CV CREATOR</h1>
        <div className="general">
          <h2>Personal Information</h2>
          <General />
        </div>
        <div className="education">
        <h2>Education</h2>
          <Education />
        </div>
        <div className="experience">
        <h2>Experience</h2>
          <Practical />
        </div>
      </div>
    );
  }
}

export default App;
