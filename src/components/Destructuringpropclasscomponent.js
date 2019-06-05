import React from "react"

class Destructuringpropclasscomponent extends React.Component{

//here we generally destructyew in render method
// here we simple use the name proper and need tnot to call this.props
render(){

const {name} = this.props

//passing two property
// const {props1 , props2} =  this.props

//same follows with state
// const {state1 , state2} = this.state

return(
	<h3>{name}</h3>
	)

}

}

export default Destructuringpropclasscomponent;