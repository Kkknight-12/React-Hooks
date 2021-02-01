import React from 'react';
import { useState } from 'react';

const Accordion = ( { items } ) => {

    // initializing state
    // intial value of active index will be null
    const [ activeIndex, setActiveIndex ] = useState(null);

    const onTitleClick = (index) => {
        // when ever the setterFunction -> setActiveIndex()
        // is called, entire componenet(Accordion) is re-rendered
        // from top and execute everything inside once again
        // and then the deault value will be repaced with  new index value inside
        // setterFunction,now the rest of the functions which call index value will
        // get the new updated value of index
        setActiveIndex(index);
    }

    const renderedItems = items.map( ( items, index )=> {
        const active = index === activeIndex ? 'active' : ''

        return(
            // returning a react fragment that have key 
            // but it won't be shown in html
            // following code will have 2 div and 
            <React.Fragment key={ items.title }>
                <div className={`title ${active}`}
                onClick={ ()=>  { onTitleClick( index ) } }>
                    <i className="dropdown icon"></i>
                    { items.title }
                </div>
                <div className={`content ${ active }`}>
                    <p>{ items.content }</p>
                </div>
            </React.Fragment>
        )
    })

    return ( 
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    );
}

export default Accordion;

