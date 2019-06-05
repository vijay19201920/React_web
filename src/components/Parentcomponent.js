import React from 'react'
import Childcomponent from './Childcomponent';



class Parentcomponent extends React.Component {

constructor(){
		super();

		this.state = {

			parentname: 'parent compoent'
		}

		this.greetparent = this.greetparent.bind(this);


}

	greetparent(childName){

			{
			/*
			instead of alert ( 'hello' + this.state.parentname); we are going to use template literals

			*/
			}

			alert ( `hello ${this.state.parentname} from ${childName}`);

	}


render(){

	

	return (
	<div>

			{
				/*
					passing handler as a props in the child component

					*/
				}
	<Childcomponent greetHandler = {this.greetparent}></Childcomponent>

	</div>
	)
}

}
export default Parentcomponent;