import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="ui seconday pointing menu">
            <Link to="/" className="item">
                Accordion
            </Link>
            <Link to="/search" className="item">
                Search
            </Link>
            <Link to="/dropdown" className="item">
                Dropdown
            </Link>
            <Link to="/translate" className="item">
                Translate
            </Link>
        </div>
    );
}

export default Header;