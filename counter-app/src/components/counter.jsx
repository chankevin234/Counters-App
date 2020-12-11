import React, { Component } from "react";

class Counter extends Component {
  //child component
  //a controlled compoenent shouldnt have local state
  //"counter.value" adds the value and id prop
  //remove (line 15-18) --> "local" state --- needs to be removed
  //   state = {
  //     value: this.props.counter.value,
  //   };

  //"this" refers to this component

  //remove (line 15-18)this function because child comp should be raising to parent component
  //   handleIncrement = (e) => {
  //     console.log(e);
  //     this.setState({ value: this.state.value + 1 });
  //   };
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps".prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("counter - unmount");
  }

  render() {
    console.log("props", this.props);
    console.log("counter - rendered");
    //this component raises events
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div> //h1 element
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
