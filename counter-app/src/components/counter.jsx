import React, { Component } from 'react';

class Counter extends Component {
    state = { //constructor
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };//data this component needs
    
    styles = {
        fontSize: 1000,
        //fontWeight: "bold"
    };

    render() {
        let classes = this.getBadgeClasses(); 
        
        return (
            <div>
                <span style={ this.styles } className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li>{ tag }</li>) }
                </ul>
            </div> //h1 element
        );    
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;