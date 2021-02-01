import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm ] = useState('React (web framework)'); // React (web framework)
    const [ results, setResults ] = useState([])

    useEffect( () => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php', {
                    // key value pairs inside params object are added to
                    // the end of the url 
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    },
                    // https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=
            });
            setResults(data.query.search);
        }

        if( term && !results.length ){
            search()
        }else{

            // will search only if there is any term, which initially is nothing
            const timeoutId = setTimeout(() => {    
                if(term){
                    search();
                }
            }, 500);
            
            // execpt 1st time, useEffect return run before other
            // functions written inside useEffect which will cancel the previous 
            // timeout before creating new timeout function.
            return() => {
                clearTimeout(timeoutId)
            }
        }
        
    }, [term] );

    // show the result
    const renderedResults = results.map( (result) => {
        return (
            <div key={ result.pageid } className="item">

                <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>

                <div className="content" >
                    <div id="head" className="header">{ result.title }</div>
                    {/* hidden feature of react which will take out span tags from result */}
                    {/* any time we take a string from 3rd party like wikipedia api it could be introducing security hole into you application, specifically a type of security called XSS Attak which is cross site scripting attack that is when we pick up and render some HTML from untrusted source that can allow some hacker or other malicious person to execute some javascript inside of our application  */}
                    {/* dont put empty space or anything btw span tag */}
                    <span dangerouslySetInnerHTML={ { 
                        __html: result.snippet }}></span>
                </div>
                </a>
            </div>
        )
    })

    return ( 
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input className="input"
                    value={term}
                    onChange={ (e)=> setTerm( e.target.value ) }/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;