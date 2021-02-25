import React from 'react';
import * as ColorSubscriptions from '../../shared/ColorSubscriptions';

const withColor = (PassedComponent) => class WithColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
  }

  componentDidMount() {
    this.setColor = (color) => {
      this.setState({ color });
    };
    ColorSubscriptions.subscribe(this.setColor);
  }

  componentWillUnmount() {
    ColorSubscriptions.unsubscribe(this.setColor);
  }

  render() {
    return <PassedComponent {...this.props} color={this.state.color} />;
  }
};

export default withColor;
