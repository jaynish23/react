import React from "react";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" }; // Initialize state with a value
    // Bind clickDemo method to the instance
    this.clickDemo = this.clickDemo.bind(this);
  }

  clickDemo(e) {
    // Update state with the input value
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>

        <br />
        
        no1:{"  "}
        <input
          type="text"
          name="txt1"
          value={this.state.value} // Bind the input value to state
          onChange={this.clickDemo} // Correctly refer to clickDemo method
        />
        <p>Entered Value: {this.state.value}</p>
      </div>
    );
  }
}

export default Event;
