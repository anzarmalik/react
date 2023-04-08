import React from "react";

const Dropdown = ({ colorList , selected , setSelection }) => {
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
    return (<div className="ui form" >
        <div className="field" >
            <label className="label" >Select a color</label>
            <div className="ui selection dropdown visible active">
                <i className="dropdown icon"></i>
                <div className="text" > {selected.label} </div>
                <div className="menu visible transition" >{renderColorList}</div>
            </div>
        </div>
    </div>);
}

export default Dropdown;