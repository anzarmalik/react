import React from 'react';

const Accordion = ({items})=>{

    const itemClick = (index)=>{
      console.log('item click index : ',index);
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
</div>)
}

export default Accordion