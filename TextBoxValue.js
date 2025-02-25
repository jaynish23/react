import React from 'react';

class TextBoxValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt1: '' }; // State initialization with txt1 property
  }

  render() {
    return (
      <div>
        {/* Input field with onChange event handler */}
        input:
        <input
          type="text"
          name="txt1"
          onChange={(e) => this.setState({ txt1: e.target.value })} // Update state on input change
          value={this.state.txt1} // Bind the value of the input field to the state
        />

        {/* Error here: 'this.target.txt1' is incorrect. It should be 'this.state.txt1'. */}
        <p>{this.state.txt1}</p> {/* Corrected: Display the value from the state */}
      </div>
    );
  }
}

export default TextBoxValue;
