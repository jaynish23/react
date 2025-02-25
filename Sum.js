import React from "react";
class Sum extends React.Component {
    constructor(props) {
        super(props);
    this.state = {  }

    }

    doSum(){
        // var a = this.state.txt1;
        // var b= this.state.txt2;
        // var c = parseInt(a) + parseInt(b)

        const {txt1,txt2} = this.state
        var c = parseInt(txt1) +parseInt(txt2)
        this.setState({ txt3 : "sum is " +c })


    }

    doSubtraction(){
        const {txt1,txt2}=this.state;
        var c = parseInt(txt1) -  parseInt(txt2) 
        this.setState({txt4: "Subtraction is " +c})

    }



    render() { 
        return (
            <>
            No1 : <input type="text" onChange={(e) => this.setState({txt1 : e.target.value})} />
            No2 : <input type="text" onChange={(e) => this.setState({txt2 : e.target.value})} />


            <br />
            <input type="button" value='sum' onClick={this.doSum.bind(this)} />
<br />
            {this.state.txt3}

<br />
            <input type="button" value="Subtraction" onClick={this.doSubtraction.bind(this)} />
            {this.state.txt4}
            <br />
            </>
         );
    }
}
 
export default Sum;