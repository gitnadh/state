import "./App.css";
import React, { Component } from "react";
import Profile from "./Components/Profile";

import { Counter } from "./Components/Counter";

export class App extends Component {
  state = {
    show: false,
    counter: 0,
  };

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
    console.log(this.state.show);
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    console.log("unmout app");
  }
  render() {
    return (
      
      <div>
        <div className="container d-flex justify-content-center">
  <div className="card p-3 py-4">
    <div className="text-center"> 
      
      
      
      <div className="row mt-3 mb-3">
      <button className="profile_button px-5" onClick={() => this.toggle()}>Toggle</button>
        {this.state.show ? (
          <Profile />
        ) : (
          <div>
            {" "}
            counter :<Counter />
            {/*<p> app counter :{this.state.counter}</p>{" "}*/}
          </div>
        )}
       
        
       
      </div>
    </div>
  </div>
</div>
      </div>
      
    );
  }
}

export default App;
