import React from "react";

class DemoClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   
    render() 
    { 
        const buttonStyle = {
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
          };
          const containerStyle = {
            backgroundColor: 'lightblue',
            padding: '20px',
          };
        return ( 
            <>
              <div style={containerStyle}>
             <h1>This is Class base Component</h1>   
             <h2>hello guyss</h2>
             <button style={buttonStyle}>Click Me</button>
             </div>
            </>
         );
    }
}
 
export default DemoClass;