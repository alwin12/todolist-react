import React from 'react';


const InputField = ({onEnterPress}) => {


	 
 return (

  <div  className='center' >
 <input placeholder="What can I do?" type="text" onKeyPress={onEnterPress}/>

</div>


 	) 

};

export default InputField;