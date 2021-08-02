import React       from 'react';
import Accordion   from './components/Accordion';
import Search      from './components/Search';
import Dropdown    from './components/Dropdown';


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
    return(
        <div>
             {/* <Accordion items={items} /> */}
             {/* <Search /> */}
             <Dropdown options={options} />
         </div>   
    )
}