import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      email: "",
      phonenumber: "",
      address: "",
    };
  }

  preview = () => {
    this.setState({
      Name: document.getElementsByClassName("name").value,
      email: document.getElementsByClassName("email").value,
      phonenumber: document.getElementsByClassName("phonenumber").value,
      address: document.getElementsByClassName("address").value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name"></label>
          <input type="text" className="name" placeholder="Full Name"></input>
          <label htmlFor="email"></label>
          <input type="email" className="email" placeholder="Email"></input>
          <label htmlFor="phoneNumber"></label>
          <input
            type="tel"
            className="phonenumber"
            placeholder="Phone Number"
          ></input>
          <label htmlFor="Address"></label>
          <input type="text" className="address" placeholder="Address"></input>
          <button type="submit" onClick={this.preview}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default General;
