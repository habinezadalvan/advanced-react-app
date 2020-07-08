import '../styles/searchBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="search-bar header--section">
                <form className="form">
                    <div className="form__search-bar">
                        <input type="text" placeholder="Search..." className="form__input"/>
                        <div className="form__search-icon">
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;