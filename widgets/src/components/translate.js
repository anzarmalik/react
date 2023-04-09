import React,{useState} from "react";
import Dropdown from './dropDown';

const options = [
    {
        label:'Africi',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'Hi'
    }
]

const Translate = ()=>{
const [language, setLanguage] = useState(options[0])
const [text, selectText] = useState()
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

return(
    <div  className="ui form" >
        <div className="field">
            <label>Enter text</label>
            <input  value={text}  onChange={(e)=>{ selectText(e.target.value)}} />
        </div>
        <Dropdown  selected={language}  setSelection={setLanguage} options={options} label={"language"} />
    </div>
)
}

export default Translate