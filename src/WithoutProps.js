import React, { Component } from 'react';

class WithProps extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{background: "hsl(180, 50%, 80%)"}}>
        <p>Without Props Div</p>
        <p>{this.props.time}</p>
      </div>
    );
  }
}

export default WithProps;
