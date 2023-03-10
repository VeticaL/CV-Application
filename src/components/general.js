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
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    if (event.target.className === "name") {
      this.setState({ Name: event.target.value });
    } else if (event.target.className === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.className === "phonenumber") {
      this.setState({ phonenumber: event.target.value });
    } else if (event.target.className === "address") {
      this.setState({ address: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            className="name"
            placeholder="Full Name"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="email"></label>
          <input
            type="email"
            className="email"
            placeholder="Email"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="phoneNumber"></label>
          <input
            type="tel"
            className="phonenumber"
            placeholder="Phone Number"
            onChange={this.updateInput}
          ></input>
          <label htmlFor="Address"></label>
          <input
            type="text"
            className="address"
            placeholder="Address"
            onChange={this.updateInput}
          ></input>
        </form>
        <p>Name : {this.state.Name}</p>
        <p>Email : {this.state.email}</p>
        <p>Phone : {this.state.phonenumber}</p>
        <p>Address : {this.state.address}</p>
      </div>
    );
  }
}

export default General;
