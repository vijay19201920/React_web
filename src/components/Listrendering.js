import React from 'react'
import Personmap from './personmap.js'

class Listrendering extends React.Component{





render(){

const names = ['using' , 'map' , 'function']

const person = [
{

	name : 'alok nath',
	age : 16,
	work: 'actor'
} ,

{
	name : 'Dravid',
	age : 44,
	work: 'cricketor'
},

{
	name : 'Mahesh bhupati',
	age : 41,
	work: 'tenissis player'
}
]

const mamesList = names.map(y => <h2> { y } </h2>);
/*key props value should be unique it cought be id also key props are specila attribute 
when creating list of element
--> these key props are not accessible in child component
key props help react which aprt of item is updated , added or removed and plays a crucial roles in handling
ui updated efficiently
it compares the old dom tree with the new dom tree and updates the only updated key pare value
--> Index as a key

we can use index as a key  only when
1)only when we do not have the unique id in the list.
2)List is static and do not change dynamically.
3)List will never be reordered or filtered.

We can use module that produces unique value

react uses index as a default key when we do not supply any key as a props


*/
const PersonDetail = person.map(person => <Personmap key ={person.name} person = {person}> </Personmap>)
/*<div> {names[0]} </div>
<div> {names[1]}  </div>
<div>{names[2]}  </div>*/
return(
	<div>
	{
		mamesList
		
		/*names.map(y => <h2> { y } </h2>)*/
	}
	{

		PersonDetail
	}
	</div>
	)

}


}

export default Listrendering;