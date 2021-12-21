import { Component } from "react";
import React from "react";
import Ship from "../components/Ship";
import Coords from "../components/Coords";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stopped: false,
    };

    this.stopRefreshOnClick = this.stopRefreshOnClick.bind(this);
  }

  stopRefreshOnClick() {
    console.log("stoppin");
    this.setState((prev) => ({ stopped: !prev.stopped }));
    console.log(this.state.stopped);
  }

  render() {
    return (
      <div>
        <Ship click={this.stopRefreshOnClick} refresh={this.state.stopped} />
        <Coords refresh={this.state.stopped} />
      </div>
    );
  }
}

export default App;
