import React from 'react'


//we can export the FUNCTIONAL component directly but while importing the name should be the same and impoet should be in the curly braces
 const Greet = (props) => {
 	
console.log (props.name);

 	return (
 		<div>
			<h1> {props.name} and his hero is {props.heroname}.</h1>
			{props.children}
			</div>
 		)
}
export default Greet;

