import React, { Component } from 'react';

class WithProps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{background: "hsl(0, 50%, 80%)"}}>
        <p>With Props Div</p>
        <p>{this.props.time}</p>
      </div>
    );
  }
}

export default WithProps;
