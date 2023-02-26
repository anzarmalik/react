import  React from "react";
import Accordion from './components/Accordion'

const items =[
    {
        title:'What is React',
        content: 'react is a front-end  library'
    },
    {
        title:'Why use react',
        content: 'bcoz its awesome '
    },
    {
        title:'How to use it ',
        content: 'even i dont know yet!'
    }
]



const  App = ()=>{
    return (<div>
    <Accordion items={items}/>
    </div>); 
};


export default App;