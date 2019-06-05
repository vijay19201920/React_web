import React from 'react'

var Eventhandle = () => {

/*

In javascript event is not camel case but in react.js the event is camel case and we do not use the
parenthesis () to call the event and if  we use the parenthasis the event will be call 
on inicial reload itself.

This can be done using simple function in place of arrow function 

function clickEvent(){

	console.log('functional click event handle'

}*/

// this is arrow function
var clickHandle =() =>{

	console.log("'functional' click event handle");
}
return(

<button  onClick ={clickHandle}> clicK here to log 'functional' click event handle</button>
	
	)


}
export default Eventhandle;