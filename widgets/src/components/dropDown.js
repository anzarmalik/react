import React,{useState, useEffect, useRef} from "react";

const Dropdown = ({ label, options , selected , setSelection }) => {
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




    const renderColorList = options.map(color => {
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
            <label className="label" >Select a {label}</label>
            <div  onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${open? "visible active": ""}`}>
                <i className="dropdown icon"></i>
                <div className="text" > {selected.label} </div>
                <div className={`menu ${open? "visible transition" :""}`} >{renderColorList}</div>
            </div>
        </div>
    </div>);
}

export default Dropdown;