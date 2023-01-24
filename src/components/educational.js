import React from "react";

class Education extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="uni"></label>
        <input type="text" className="uni" placeholder="university"></input>
        <label htmlFor="degree"></label>
        <input type="text" className="degree" placeholder="Degree"></input>
        <label htmlFor="start"></label>
        <input type="text" className="start" placeholder="Start date"></input>
        <label htmlFor="end"></label>
        <input type="text" className="end" placeholder="End date"></input>
      </form>
    );
  }
}

export default Education;
