import React from 'react'

function person ({person}){

	return  (
		<div>
		<div> MappingName is  <b>{ person.name }</b> 
		Mappingage is <b>{person.age}</b> 
		Mappingworks as <b>{person.work}</b> </div>
		</div>
		)

}

export default person