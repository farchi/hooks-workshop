import React, { useState, Component } from 'react';

export class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };

      this.handleCountUp = this.handleCountUp.bind(this);
      this.handleCountDown = this.handleCountDown.bind(this);
      this.handleCountReset = this.handleCountReset.bind(this);
    }

    handleCountUp() {
      this.setState(({ count }) => ({ count: count + 1 }));
    }

    handleCountDown() {
      this.setState(({ count }) => ({ count: count - 1 }));
    }

    handleCountReset() {
      this.setState({ count: 0 });
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <h1>{count}</h1>
          <button onClick={this.handleCountUp}>+1</button>
          <button onClick={this.handleCountDown}>-1</button>
          <button onClick={this.handleCountReset}>Reset</button>
        </div>
      );
    }
}

export function CounterHooks() {
    const [count, setCount] = useState(0);

    function handleCountUp() {
        setCount(count + 1);
    }

    function handleCountDown() {
        setCount(count - 1);
    }

    function handleCountReset() {
        setCount(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCountUp}>+1</button>
            <button onClick={handleCountDown}>-1</button>
            <button onClick={handleCountReset}>Reset</button>
        </div>
    );
}