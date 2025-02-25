import React from "react";
class Form extends React.Component {
    constructor(props) {
        super(props);
    this.state = { myerr : {} }
    }

    doValidation(){
        const {txt1} =this.state
        var isValid = true
        var temperr = {}

        if (!txt1) {
            isValid = false
            temperr.txt1="Enter Name"
        }
        this.setState({myerr : temperr})
        return isValid
    }

    doUpdate(e){
    this.setState({[e.target.name] : e.target.value})
    }

    render() { 
        return (
            <>
            Name : <input type="text" name="txt1" onChange={this.doUpdate.bind(this)}  />
            <p>{this.state.myerr.txt1}</p>
            {/* phone no : <input type="text" name="txt2" onChange={(e) => this.setState({txt2 : e.target.value})} />
            <p>{this.state.txt2}</p> */}

            <input type="button" value="Submit" onClick={this.doValidation.bind(this)} />

            </>
          );
    }
}


export default Form;