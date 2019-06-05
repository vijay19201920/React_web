import React from 'react'

class Event extends React.Component{


clickHandle(){

	console.log('This is class event handle component.');	
}
	
render(){
return(

<button onClick = {this.clickHandle}>This is 'class' event handle component. Click to console the log.</button>

	)

}


}

export default Event;