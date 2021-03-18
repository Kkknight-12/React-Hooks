import {useState, useEffect, useRef } from 'react';

const Dropdown = ( { label, options, selected, onSelectedChange, text } ) => {

    // making drop downmenu-> false is close, true is open
    const [ open, setOpen ] = useState(false);

    // using useRef
    const ref = useRef();

    // event listner are called in child to parent order
    // first manual( added with addEventlistner) event listner 
    // are called then react one
    useEffect( () => {

        const onBodyClick = (e) => {
            // if clicked inside ui form then do nothing
            // e.target will show the element which was clicked
            // re.current will trigger when the <div ref={ref} className="ui form"> or its child element  is clicked
            // re.currennt will see that e.target element is <div ref={ref} className="ui form"> or its child element
            // if it is then do nothing
            if( ref.current && ref.current.contains( e.target ) ){
                return;
            }
            // else setOpen = false which will close dropdown
            setOpen(false)
        }

        // adding event listner to body
        // which will be triggered if you click anywhere
        document.body.addEventListener( "click", onBodyClick, { capture: true } );
        // will remove the old event listner before adding new one, 
        // will also remove if we remove Dropdown component
        return () => {
            document.body.removeEventListener( 'click', onBodyClick )
        }
    }, []);


    const renderedOptions = options.map( ( option ) => {

        // if the seleted option( default red ) is in option which will always be true
        // then don't return it
        if( option.value === selected.value ){
            return null;
        }

        // return the remaining in dropdown list
        return (
            <div key={ option.value } 
                className="item"
                onClick={ () => onSelectedChange(option) }>
                { option.label }
            </div>
        )
    })

    return ( 
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                // when user click on div it will 
                // change open from false to true and visa-versa
                onClick= { () => setOpen(!open) } 
                // if open is true then show visible active class
                // else not
                className= { `ui selection dropdown 
                ${ open ? 'visible active' : '' }` } 
                > 
                    {open ? <i class="angle up icon"></i> : <i class="angle down icon"></i> }
                    {/* this will always be shown, though value will change */}
                    <div className="text">{selected.label}</div>
                    {/* this will work on open close functionality */}
                    <div 
                        className= { `menu ${ open ? 'visible transition' : '' }` }>
                            {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;