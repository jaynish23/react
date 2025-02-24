import React from 'react'

function EventDemo() {

    function clickDemo(e) {
    //    console.log(e);
      //  console.log(e.type);
    //   console.log(e.target.name);
      console.log(e.target.value);
      
    }

  return (
    <div>
        <h1>EventDemo</h1>
        TextBox : <input type="text" onChange={clickDemo} name="txt1" />
        <input type="button" name='btn1' value="i am button 1" onClick={clickDemo} />
        </div>

  )
}

export default EventDemo
