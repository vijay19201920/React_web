import React,{Component} from 'react'

class Statetest extends Component {
constructor(){
super();

this.state = {

	name: "vijay kumar dubey",
	place : "delhi"
}

}


 changeMessage () {

 this.setState ({

 	name : "manto dubey",
 	place :" bansi" 
 })

}

changeMeBack(){
this.setState({
       name: "vijay kumar dubey",
	   place : "delhi"

	})
}

changeit(){
this.setState({
       name: "manto dubey",
	   place : "bansi"

	})


}
render(){

return (
		<div>
		<h1 onMouseEnter = {() => this.changeMeBack()} onMouseLeave={()=> this.changeit()}>This is the example of State done by {this.state.name} lives in {this.state.place}.</h1>
	<button  onClick={() => this.changeMessage()}>This is the example of State  {this.state.name} .</button>
	</div>
	) 


}


}

export default Statetest