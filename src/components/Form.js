import React,{Component} from 'react'

class Form extends Component {
constructor(){
	super();

	this.state = {
		name: '',
		place : '',
		topic : 'angular'

	}

};

handleName = (event) => {
	this.setState({
	name: event.target.value
	})
}

handlePlace = (event) => {
	this.setState({
	place: event.target.value
	})
}

selectHandle = (event) => {

this.setState({

topic : event.target.value

})


}

submit = (event) => {
alert( `${this.state.name}  ${this.state.place}  ${this.state.topic}`)

//this function is used to restrict the form to reload
event.preventDefault();

}

render(){

	const {name , place , topic } = this.state 
//using the method destruction
//value ={this.state name} is replced with {name} like aLL THE THREE INPUTS FIELD


return (
		<div>
		<form onSubmit = {this.submit}>
		<div>
			<label>Your name</label>
			<input name ='name' type= "text" value ={name}  onChange ={this.handleName} ></input>
		</div>
		<div>
			<label>Your Place addess</label>
			<input name ='place' type= "textarea" value ={place}  onChange ={this.handlePlace} ></input>
		</div>
<div>
			<label>Your interest</label>
			<select type = 'select' value = {topic} onChange = {this.selectHandle}>
				<option value= ' angular' >angular</option>
				<option  value= ' vew'>vew</option>
				<option value= ' php'>php</option>
				<option value= ' javascript'>javascript</option>
			</select>

</div>
			<button  type = 'submit' value ='submit' >submit</button>

		</form>
	</div>
	) 


}


}

export default Form