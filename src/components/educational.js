import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      School: "",
      Degree: "",
      Date: "",
      Location: "",
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    if (event.target.className === "school") {
      this.setState({ School: event.target.value });
    } else if (event.target.className === "degree") {
      this.setState({ Degree: event.target.value });
    } else if (event.target.className === "date") {
      this.setState({ Date: event.target.value });
    } else if (event.target.className === "location") {
      this.setState({ Location: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="school"></label>
          <input
            type="text"
            placeholder="School"
            className="school"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="degree"></label>
          <input
            type="text"
            className="degree"
            placeholder="Degree"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="date"></label>
          <input
            type="text"
            className="date"
            placeholder="Date"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="end"></label>
          <input
            type="text"
            className="location"
            placeholder="Location"
            onChange={this.updateInput}
          ></input>
        </form>
        <p>School : {this.state.School}</p>
        <p>Degree : {this.state.Degree}</p>
        <p>Date : {this.state.Date}</p>
        <p>Location : {this.state.Location}</p>
      </div>
    );
  }
}

export default Education;
