import React from 'react';
import ReactDom from 'react-dom';
const tasks = ['take out the trash', 'shovel the driveway',
    'walk the dog'
];

const element = 
<div>
<h1>task list</h1>
<ol>
    {tasks.map((task,index)=><li key={index}>{task}</li>)}
    
</ol>




</div>
    



ReactDom.render(element, document.getElementById('root'));