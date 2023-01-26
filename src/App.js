import "./App.css";
import General from "./components/general";
import Education from "./components/educational";
import Practical from "./components/practical";

function App() {
  return (
    <div className="App">
      <h2>CV CREATOR</h2>
      <div className="general">
        <h3>Personal Information</h3>
        <General />
      </div>
      <div className="general">
      <h3>Education</h3>
        <Education />
      </div>
      <div className="general">
      <h3>Experience</h3>
        <Practical />
      </div>
    </div>
  );
}

export default App;
