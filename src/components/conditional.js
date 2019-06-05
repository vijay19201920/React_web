import React from 'react'


class conditional extends React.Component {

	constructor(){
		super()

		this.state = {

			isLoggedIn : true
		}
	}

	render(){

/*if(this.state.isLoggedIn){

return <div> welcome vijay </div>

}else{
return <div> welcome guest </div>
}*/



/*let message ;

// this  element variables approach 
if(this.state.isLoggedIn){
	message =	<div>  Welcome vijay </div>

} else {

	message   =  <div> <h1> welcome guest </h1> </div>

}

return <div> {message} </div>
}*/

// short circuit operator approach the left side is evaluated first and if it is true then right side is evaluateds

//return this.state.isLoggedIn && <div> welcome vijay </div>

// using conditional ternary operator
return (
	this.state.isLoggedIn ? (
		<div> <h3>Welcome vijay </h3></div> 
		):(
		<div> <h3>welcome guest </h3></div>
		)
		)
}


}
export default conditional;