import React from "react";
class LocalCounter extends React.Component {
    constructor(props) {
        super(props);
        const savedCount = localStorage.getItem('count') || 0;
    this.state = { 
        count: Number(savedCount),  
     }

    }
    updateCount = (newCount) => {
        this.setState({ count: newCount }, () => {
          localStorage.setItem('count', newCount);  // Save the new count to localStorage
        });
      };
    render() { 
        return ( 
            <>
            <h1>{this.state.count}</h1>
            <input type="button" value="increment" onClick={() => this.updateCount({count : this.state.count+1})} />
            <input type="button" value="increment" onClick={() => this.updateCount({count : this.state.count-1})} />
            </>
         );
    }
}
 
export default LocalCounter;