import React from "react";

class Practical extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="position"></label>
        <input type="text" className="position" placeholder="Position"></input>
        <label htmlFor="company"></label>
        <input type="text" className="company" placeholder="Company"></input>
        <label htmlFor="start"></label>
        <input type="text" className="start" placeholder="Start date"></input>
        <label htmlFor="end"></label>
        <input type="text" className="end" placeholder="End date"></input>
      </form>
    );
  }
}

export default Practical;
