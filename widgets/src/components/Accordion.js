import React ,{ useState } from 'react';

const Accordion = ({items})=>{
const [ activeIndex, setActiveIndex ] = useState(null);
    const itemClick = (index)=>{
      console.log('item click index : ',index);
      setActiveIndex(index);
    };

    const itemsList = items.map((item,index) => {
        return (<React.Fragment key={item.title}>
            <div className="title active"  onClick ={()=>{itemClick(index)}} >
             <i className="dropdown icon"></i>
             {item.title}
            </div>
            <div className="content active">
            <p> {item.content}</p>
            </div>
            </React.Fragment>)
    })
return (<div className='ui styled accordion'>
    {itemsList}
    <h1>{activeIndex}</h1>
</div>)
}

export default Accordion