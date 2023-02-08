import React from "react";

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

  preview = () => {
    this.setState({
      Uni: document.getElementsByClassName("uni").value,
      degree: document.getElementsByClassName("degree").value,
      start: document.getElementsByClassName("start").value,
      end: document.getElementsByClassName("end").value,
    });
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
            onClick={this.preview}
          ></input>
          <label htmlFor="degree"></label>
          <input
            type="text"
            className="degree"
            placeholder="Degree"
            onClick={this.preview}
          ></input>
          <label htmlFor="start"></label>
          <input
            type="text"
            className="start"
            placeholder="Start date"
            onClick={this.preview}
          ></input>
          <label htmlFor="end"></label>
          <input
            type="text"
            className="end"
            placeholder="End date"
            onClick={this.preview}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Education;
