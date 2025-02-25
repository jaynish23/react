import React from "react";

class Sum extends React.Component {
  constructor(props) {
    super(props);
    // Initializing state with empty values for inputs and result
    this.state = {
      txt1: '',
      txt2: '',
      txt3: ''
    };
  }

  // Method to handle different actions like sum, subtraction, multiplication, and division
  doAction = (action) => {
    // Parsing the inputs to integers
    const a = parseInt(this.state.txt1);
    const b = parseInt(this.state.txt2);

    // Checking if the inputs are numbers
    if (isNaN(a) || isNaN(b)) {
      this.setState({ txt3: "Please enter valid numbers!" });
      return;
    }

    // Using switch-case to perform actions based on the action passed
    // switch (action) {
    //   case 'add': // If action is 'add', perform addition
    //     const sum = a + b;
    //     this.setState({ txt3: `Sum is: ${sum}` });
    //     break;

    //   case 'subtract': // If action is 'subtract', perform subtraction
    //     const difference = a - b;
    //     this.setState({ txt3: `Subtraction is: ${difference}` });
    //     break;

    //   case 'multiply': // If action is 'multiply', perform multiplication
    //     const product = a * b;
    //     this.setState({ txt3: `Multiplication is: ${product}` });
    //     break;

    //   case 'divide': // If action is 'divide', perform division
    //     if (b === 0) { // Check if division by zero occurs
    //       this.setState({ txt3: "Cannot divide by zero!" });
    //     } else {
    //       const quotient = a / b;
    //       this.setState({ txt3: `Division is: ${quotient}` });
    //     }
    //     break;

    //   default: // If the action is invalid, show an error message
    //     this.setState({ txt3: "Invalid action!" });
    // }

    // Using an if-else statement (an alternative to switch)
    // This will achieve the same result as the switch-case above, just in a different way
    
    if (action === 'add') {
      const sum = a + b;
      this.setState({ txt3: `Sum is: ${sum}` });
    } else if (action === 'subtract') {
      const difference = a - b;
      this.setState({ txt3: `Subtraction is: ${difference}` });
    } else if (action === 'multiply') {
      const product = a * b;
      this.setState({ txt3: `Multiplication is: ${product}` });
    } else if (action === 'divide') {
      if (b === 0) {
        this.setState({ txt3: "Cannot divide by zero!" });
      } else {
        const quotient = a / b;
        this.setState({ txt3: `Division is: ${quotient}` });
      }
    } else {
      this.setState({ txt3: "Invalid action!" });
    }
  
  };

  render() {
    return (
      <>
        <div>
          No1: <input
            type="text"
            onChange={(e) => this.setState({ txt1: e.target.value })}
            value={this.state.txt1}
          />
        </div>
        <div>
          No2: <input
            type="text"
            onChange={(e) => this.setState({ txt2: e.target.value })}
            value={this.state.txt2}
          />
        </div>

        {/* Buttons for each action */}
        <div>
          <input
            type="button"
            value="Add"
            onClick={() => this.doAction('add')} // Add action triggers the doAction method with 'add' argument
          />
          <input
            type="button"
            value="Subtract"
            onClick={() => this.doAction('subtract')} // Subtract action triggers the doAction method with 'subtract' argument
          />
          <input
            type="button"
            value="Multiply"
            onClick={() => this.doAction('multiply')} // Multiply action triggers the doAction method with 'multiply' argument
          />
          <input
            type="button"
            value="Divide"
            onClick={() => this.doAction('divide')} // Divide action triggers the doAction method with 'divide' argument
          />
        </div>

        {/* Displaying the result */}
        <div>
          {this.state.txt3} {/* Displays the result or error message */}
        </div>
      </>
    );
  }
}

export default Sum;
