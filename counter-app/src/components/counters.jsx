import React, { Component } from "react";
import Counter from "./counter";

//Counters is the parent component of Counter
class Counters extends Component {
  //this component handles a raised event
  render() {
    //destructuring arg
    const { onReset, counters, onDelete, onIncrement } = this.props;
    //.map refers to an array
    //(this component).state.(counters within state).map
    // "key" value is used internally/cant be accessed
    //props (ex. key, value, etc.) are unique to the called component file
    console.log("Counters - Rendered");
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
