import React,{useState, useEffect, useRef} from "react";

const Dropdown = ({ colorList , selected , setSelection }) => {
    const [open,setOpen] = useState(false);
    const ref = useRef();
 useEffect(() => {
document.body.addEventListener('click', (event)=>{
    if(ref.current.contains(event.target)){
return;
    }
    setOpen(false)
})
 },[])




    const renderColorList = colorList.map(color => {
        if(color.label === selected.label){
            return null;
        }
        return (
            <div key={color.value} className="item"  onClick={()=>{ setSelection(color) }} >
                {color.label}
            </div>
        )
    });
    console.log("🚀 ~ file: dropDown.js:11 ~ renderColorList ~ renderColorList:", renderColorList)
    return (<div ref={ref} className="ui form" >
        <div className="field" >
            <label className="label" >Select a color</label>
            <div  onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${open? "visible active": ""}`}>
                <i className="dropdown icon"></i>
                <div className="text" > {selected.label} </div>
                <div className={`menu ${open? "visible transition" :""}`} >{renderColorList}</div>
            </div>
        </div>
    </div>);
}

export default Dropdown;