import React from 'react';
import '../index.css';
import { useState } from 'react';

const Accordion = ( { items } ) => {

    const [ activeIndex, setActiveIndex ] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map( ( items, index )=> {
        const active = index === activeIndex ? 'active' : ''

        return(
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

