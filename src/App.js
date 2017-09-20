import React, { Component } from 'react';
import WithProps from './WithProps';
import WithoutProps from './WithoutProps';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().getTime(),
    };

    this.timeInterval = null;
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.setState({ time: new Date().getTime() })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    return (
      <div>
        <h1>Cool Stuff</h1>
        <WithProps time={this.state.time}/>
        <WithoutProps time={this.state.time}/>
      </div>
    );
  }
}

export default App;
