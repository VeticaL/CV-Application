import React from "react";

class General extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name"></label>
        <input type="text" className="name" placeholder="Full Name"></input>
        <label htmlFor="email"></label>
        <input type="email" className="email" placeholder="Email"></input>
        <label htmlFor="phoneNumber"></label>
        <input
          type="text"
          className="phonenumber"
          placeholder="Phone number"
        ></input>
        <label htmlFor="Address"></label>
        <input
          type="text"
          className="phonenumber"
          placeholder="Address"
        ></input>
      </form>
    );
  }
}

export default General;
