import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
      <h1>Welcome to Website</h1>
      <Router>
        <nav>
          <Link to="/home">Home | </Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;





// import React from 'react'
// import Demo from './Demo';
// import DemoClass from './DemoClass';
// import './App.css'
// function App() {
//   var a=10;
//   var b= 20;
//   let myColor = {
//     backgroundColor : 'blue',
//     color : 'white'
//   }

//   return (
//     <>
//       <Demo />
//       <DemoClass />
//     <h1 style={myColor}> App </h1>
//     <h1 style={{backgroundColor:'red', color:'white'}}> Application inline css </h1>
//     <h2 className='myClass'>external csss</h2>
//     <br />
//     <div>
    
//     value of a is {a}
//     value of b is {b}
//     {a+b}
//     </div>
//   </>
//   )
// }

// export default App


