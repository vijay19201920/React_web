import React from 'react'

function Childcomponent(props) {

return (


<div>

{
/*
calling parent handler and passing the parameter using arrow function
*/
}

<button onClick = { () =>  props.greetHandler('child component')}> Greet parent</button>
</div>
	)

}

export default Childcomponent;