import React from "react";
import Preview from "./preview";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Uni: "",
      degree: "",
      start: "",
      end: "",
    };
  }

  updateUni = (e) => {
    this.setState({ Uni: e.target.value });
  };

  updateDegree = (e) => {
    this.setState({ degree: e.target.value });
  };

  updateStart = (e) => {
    this.setState({ start: e.target.value });
  };

  updateEnd = (e) => {
    this.setState({ end: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="uni"></label>
          <input
            type="text"
            className="uni"
            placeholder="University"
            onChange={(e) => this.updateUni(e)}
          ></input>
          <label htmlFor="degree"></label>
          <input
            type="text"
            className="degree"
            placeholder="Degree"
            onChange={(e) => this.updateDegree(e)}
          ></input>
          <label htmlFor="start"></label>
          <input
            type="text"
            className="start"
            placeholder="Start date"
            onChange={(e) => this.updateStart(e)}
          ></input>
          <label htmlFor="end"></label>
          <input
            type="text"
            className="end"
            placeholder="End date"
            onChange={(e) => this.updateEnd(e)}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <Preview info={this.state} />
        
      </div>
    );
  }
}

export default Education;
