import React from "react"


/*
//their are two ways of passing destructure in parameter functional component
const Destructuringprops = ({name}) => {
return (
	<div>
		<h1>{name}.</h1>
		</div>
		)
} */

//destructuring in function body
const Destructuringprops = (props) => {

const {name} = props;

	return (
	<div>
		
		<h1>{name}.</h1>
		</div>
		)
}

export default Destructuringprops;