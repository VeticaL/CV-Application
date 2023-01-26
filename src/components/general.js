import React, { Component } from "react";
import Preview from "./preview";

class General extends Component {
  cunstructor(props) {
    super(props);
    this.state = {
      Name: "",
      email: "",
      phonenumber: "",
      address: "",
    };
  }

  updateName = (e) => {
    this.setState({ Name: e.target.value });
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  updatePhoneNumber = (e) => {
    this.setState({ phonenumber: e.target.value });
  };

  updateAddress = (e) => {
    this.setState({ address: e.target.value });
  };

  render() {
    return (
      <div>
              <form>
        <label htmlFor="name"></label>
        <input
          type="text"
          className="name"
          placeholder="Full Name"
          onChange={(e) => this.updateName(e)}
        ></input>
        <label htmlFor="email"></label>
        <input
          type="email"
          className="email"
          placeholder="Email"
          onChange={(e) => this.updateEmail(e)}
        ></input>
        <label htmlFor="phoneNumber"></label>
        <input
          type="text"
          className="phonenumber"
          placeholder="Phone number"
          onChange={(e) => this.updatePhoneNumber(e)}
        ></input>
        <label htmlFor="Address"></label>
        <input
          type="text"
          className="address"
          placeholder="Address"
          onChange={(e) => this.updateAddress(e)}
        ></input>
      </form>
      <Preview info={this.state} />
      </div>
    );
  }
}

export default General;
