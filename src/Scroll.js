import React from 'react';

/*props.children refers to the element the scroll tag is wrapped around in App.js

this function modifies the cardlist by making it scrollabe and returns it
*/
const Scroll = (props) =>{

	return (
		<div  style= {{overflowY: 'scroll', border: '1px solid black', height:'150px', width:'400px'}} >

      {props.children}
		</div>

		)
};


export default Scroll;