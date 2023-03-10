import React from "react";

class Practical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    if (event.target.className === "position") {
      this.setState({ position: event.target.value });
    } else if (event.target.className === "company") {
      this.setState({ company: event.target.value });
    } else if (event.target.className === "start") {
      this.setState({ startDate: event.target.value });
    } else if (event.target.className === "end") {
      this.setState({ endDate: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="position"></label>
          <input
            type="text"
            placeholder="Position"
            className="position"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="company"></label>
          <input
            type="text"
            className="company"
            placeholder="Company"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="start"></label>
          <input
            type="text"
            className="start"
            placeholder="Start date"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="end"></label>
          <input
            type="text"
            className="end"
            placeholder="End date"
            onChange={this.updateInput}
          ></input>
        </form>
        <p>Position : {this.state.position}</p>
        <p>Company : {this.state.company}</p>
        <p>Start Date : {this.state.startDate}</p>
        <p>End Date : {this.state.endDate}</p>
      </div>
    );
  }
}

export default Practical;
