import React , { useState } from 'react';
import Accordion   from './components/Accordion';
import Search      from './components/Search';
import Dropdown    from './components/Dropdown';
import Translate  from './components/Translate';

const items = 
[
 {
     title: 'What is React?',
     content: 'React is front-end js framework'
 }, {
    title: 'Need to use React?',
    content: 'Yes, React is the most popular and easiest front-end framework.'
}, {
    title: 'How to use React?',
    content: 'React use by creating components.'
},
];

const options = [
  { 
      label: 'The color Red',
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
];


export default () =>{ 
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
    return(
        <div>
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
             {/* <Accordion items={items} /> */}
             {/* <Search /> */}
          {/* {  showDropdown ?
           <Dropdown 
             selected={selected}
             onSelectedChange={setSelected}
              options={options} />

              : null } */}

              <Translate />
         </div>   
    )
}