import React from 'react'

class Event extends React.Component {
constructor(){
super();

this.state = {
value : 'Click to change the state and check the bind method'
}

//this related to method 3 as passing to the constructor
//this.clickhandle = this.clickhandle.bind(this);

}


//this is related to method number 2
//  clickhandle () {

//  	this.setState({
// value : 'after click Changed state and check the bind method'

//  	})

// }

// this class property as arrow function method 4
clickhandle = () => {

  	this.setState({
 		value : 'after click Changed state and check the bind method'
	})
  }

render(){

//their are four menthods to bind that state data in the jsx
return (
<div>
{/* 

method 1 --> this method is not recommended as this is good for small application but in large application
this may produce issue as it load the whole component and if the components contains may component then
it will load all the related component which is not good for application and its performace is degraded.

<button onClick = {this.clickhandle.bind(this)}> normal bind method {this.state.value}</button>
<p>.</p>

*/}


{/*Methos 2 using binding arrow function in render method we can easily pass the paramerts and it can be used

<button onClick = {()=> this.clickhandle()}> using Arrow function {this.state.value}</button>
<p>.</p>
*/}
{/*Method 3 This is recommended way of passing state to JSX by react documentation as the binding happen in the 
constructor method and it is better then binding state in render method.
*/}
<button onClick = {this.clickhandle}> using contructor  function {this.state.value}</button>
</div>
	)

}
}

export default Event;