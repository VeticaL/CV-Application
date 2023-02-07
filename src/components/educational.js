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


  render() {
    return (
      <div>
        <form>
          <label htmlFor="uni"></label>
          <input
            type="text"
            className="uni"
            placeholder="University"
          ></input>
          <label htmlFor="degree"></label>
          <input
            type="text"
            className="degree"
            placeholder="Degree"
          ></input>
          <label htmlFor="start"></label>
          <input
            type="text"
            className="start"
            placeholder="Start date"
          ></input>
          <label htmlFor="end"></label>
          <input
            type="text"
            className="end"
            placeholder="End date"
          ></input>
          <button type="submit">Submit</button>
        </form> 
      </div>
    );
  }
}

export default Education;
