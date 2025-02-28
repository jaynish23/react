import React from "react";

class StopCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isActive: false,
      isPaused: false,
    };
    this.interval = null; // Store the interval reference
  }

  start = () => {
    if (!this.state.isRunning) {
      this.interval = setInterval(() => {
        this.setState({
            count: this.state.count+1,
            isActive: true,
            isPaused: false,
          });
      }, 1000);
    }
  };
  stop = () => {
    clearInterval(this.interval);
    this.setState({
      count: 0,
      isActive: false,
      isPaused: false,
    });
  };

  pause = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false, isPaused: true });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.start} disabled={this.state.isActive}>
          Start
        </button>
        <button onClick={this.stop} disabled={!this.state.isActive}>
          Stop
        </button>
        <button onClick={this.pause} disabled={this.state.isPaused}>
          Pause
        </button>
        <p>{this.state.count}</p>
      </>
    );
  }
}

export default StopCount;
