import React  from 'react';

const Nojsx = () => {

	return React.createElement(
	'div' ,
	 {id :'hello' , className : 'dummyclass'} ,   
	 React.createElement('h1' ,null , 'hey this is not jsx')
	 )
	
} 

export default Nojsx;