import React, { Component, useEffect, useState } from 'react';

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h1>{this.state.time}</h1>;
  }
}

export const HookClock = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{time}</h1>;
};
