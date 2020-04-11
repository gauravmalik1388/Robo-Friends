import React from 'react';
import Card from './card';


const cardlist =({robots})=>{

const cardcomponenet =robots.map((user,i) =>{

return( <Card key = {i}id={robots[i].id} name={robots[i].name
} email={robots[i].email}    />
)

})
return (

<div>
	
{cardcomponenet}



</div>
	);




}

export default cardlist ;