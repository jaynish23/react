import React from 'react'
import './Counter.css'; 
class Counter extends React.Component {
    constructor(props) {
        super(props);
    this.state = { count : 0, msg: '' }
    }
    // update = () => {
    //     this.setState({count: this.state.count+1})
    // }

    update = () => {
        if (this.state.count < 5) {
            this.setState({
                count: this.state.count + 1,
                msg: ""
            });
        } else {
            this.setState({ msg: "Too High Limit is Reach" });
        }
    }
    // decrement =() => {
    //     this.setState({count : this.state.count-1})
    // }
    decrement= () => {
        if(this.state.count>0){
        this.setState({
            count : this.state.count-1,
            msg: ""
        })
        }
        else{
            this.setState({msg:"Too Low Limit is reach!!"})
        }
    }
    render() {
         
        return ( 
            <>
           <div className="counter-container">
                <h1>Counter: {this.state.count}</h1>
                <div className="buttons">
                    <input 
                        type="button" 
                        value="Increment" 
                        onClick={this.update} 
                    />
                    <input 
                        type="button" 
                        value="Decrement" 
                        onClick={this.decrement} 
                    />
                </div>
                <h2>{this.state.msg}</h2>
                <hr />
            </div>
            {/* <input type="button" value="increment" onClick={()=> this.setState({count:this.state.count+1})} />
            <input type="button" value="decrement" onClick={()=> this.setState({count:this.state.count-1})} /> */}
            </>
         );
    }
}
 
export default Counter;

import React from "react";

class LocalCounter extends React.Component {
  constructor(props) {
    super(props);
    // Get the initial count value from localStorage, or default to 0
    const savedCount = localStorage.getItem('count') || 0;

    this.state = {
      count: Number(savedCount),  // Convert it to a number since localStorage stores everything as strings
    };
  }

  // Update the count in both state and localStorage
  updateCount = (newCount) => {
    this.setState({ count: newCount }, () => {
      localStorage.setItem('count', newCount);  // Save the new count to localStorage
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <input
          type="button"
          value="Increment"
          onClick={() => this.updateCount(this.state.count + 1)}
        />
        <input
          type="button"
          value="Decrement"
          onClick={() => this.updateCount(this.state.count - 1)}
        />
      </>
    );
  }
}

export default LocalCounter;
