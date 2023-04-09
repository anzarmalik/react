import React , { useState } from "react";
// import Search from "./components/search";
// import Accordion from './components/Accordion'
import Dropdown from "./components/dropDown";
import Translate from "./components/translate";

const items = [
    {
        title: 'What is React',
        content: 'react is a front-end  library'
    },
    {
        title: 'Why use react',
        content: 'bcoz its awesome '
    },
    {
        title: 'How to use it ',
        content: 'even i dont know yet!'
    }
]

const colorList = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
]



const App = () => {
    // const [selected, setSelection] = useState(colorList[0]);

    // return (<div>
    //     {/* <Search /> */}
    //     {/* <Accordion items={items}/> */}
    //     <Dropdown   label={"color"}  selected={selected}  setSelection={setSelection} options={colorList} />
    // </div>);

    return(<div><Translate/></div>)
};


export default App;