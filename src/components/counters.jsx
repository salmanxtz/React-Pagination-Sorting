import React, { Component } from "react";
import Counter from "./counter";

export class Counters extends Component {
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.onDelete}
            onIncrement={this.onIncrement}
          >
            <h2>{counter.value}</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
