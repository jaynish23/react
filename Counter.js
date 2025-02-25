import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count : 0
         }
         console.log("constructor will call");
         
    }
    increment =  () => {
        this.setState({count : this.state.count+1})
    }
    componentDidMount(){
        this.setState({count : 20})
        console.log("component did mount");
        
    }
    decrement =() =>{
        this.setState({count : this.state.count-2})
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    render() 
    {
        console.log("render method");
         
        return ( 
            <>
              <button onClick={this.increment.bind(this)}>increment</button> 

            <input type="button" value='increase' onClick={this.increment.bind(this)} />

              <p>current count: {this.state.count}</p> 
              <hr />

              <input type="button" value='decrease' onClick={this.decrement.bind(this)} />
            </>
         );
    }
}
 
export default Counter;