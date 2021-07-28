import React from 'react';
import Accordion  from './components/Accordion';
import Search  from './components/Search';


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


export default () =>{ 
    return(
        <div>
             {/* <Accordion items={items} /> */}
             <Search />
         </div>   
    )
}