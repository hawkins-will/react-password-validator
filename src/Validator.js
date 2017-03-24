import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super()
    this.state = {
      email: "",
      password1: "",
      password2: ""
    }
  }

  checkInput() {
    if (!this.state.email && this.state.password1 !== this.state.password2){
      alert("You somehow did EVERYTHING wrong...")
    } else if (!this.state.password1 || !this.state.password1) {
      alert("You need to complete BOTH of the Password fields!")
    } else if (!this.state.email) {
      alert("You need to enter an Email");
    } else if (!this.state.password1 || !this.state.password2 || this.state.password1 !== this.state.password2) {
      alert("Your Passwords do not match");
    } else if (this.state.email && this.state.password1 === this.state.password2) {
      alert("Good Job, you did the thing!");
    } else {
      alert("You did something VERY wrong!");
    }
  }

  render() {
    return (
      <div className="form" >
        <h1>Sign Up</h1>
        <input onChange={(e) => this.setState({email: e.target.value})} type="text" placeholder="email" />
        <input onChange={(e) => this.setState({password1: e.target.value})} type="password" placeholder="password" />
        <input onChange={(e) => this.setState({password2: e.target.value})} type="password" placeholder="confirm password" />
        <input onClick={() => this.checkInput()} type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
