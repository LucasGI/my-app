import React from 'react';

class Counter extends React.Component {
    state = { value: 0}
    increment() {
        this.setState({ value: this.state.value + 1 })
      }
      decrement() {
        this.setState({ value: this.state.value - 1 })
      }
      render() {
          return (
              <div style={{ backgroundColor: this.props.name, color: 'white'}}>
              <p>{this.props.name} counter</p>
              <p>{this.state.value}</p>
              <button onClick={ () => {this.increment()}}>+</button>
              <button onClick={ () => {this.decrement()}}>-</button>
              </div>
          )
      }
}

export default Counter;   