import React,{Component} from 'react'
import Purecomponentfrom './Purecomponent'
import Regularpurecomponent from './Regularpurecomponent'

class Parentpurecomponent extends Component {
constructor(){
super();

this.state = {

	name: "vijay kumar dubey"
	
}

}

ComponentDidMount(){
setInterval(() => {

this.setState({
	name: "vijay kumar dubey"

})

} , 2000)

}



render(){

return (
		<div>
		<Purecomponent/>
		<Regularpurecomponent/>
	</div>
	) 


}


}

export default Parentpurecomponent