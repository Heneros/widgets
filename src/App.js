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

const showAccordion = () =>{
   if(window.location.pathname === '/'){
       return <Accordion items={items} />;
   }
};
const showList = () =>{
    if(window.location.pathname === '/list'){
        return <Search/>;
    }
 };

 const showDropdown = () =>{
    if(window.location.pathname === '/dropdown'){
        return <Dropdown/>;
    }
 };
 const showTranslate = () =>{
    if(window.location.pathname === '/translate'){
        return <Translate/>;
    }
 };
 
export default () =>{ 

    return(
        <div>
              {showAccordion()}
              {showList()}
              {showDropdown()}
              {showTranslate()}
         </div>   
    )
}