import React, {Component} from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../styles/search.css';


class SearchBar extends Component{
    state = {inputValue: ""};

    onInputChange = ({target: {value}}) => {
        this.setState({inputValue: value});
    }
    onInputSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.inputValue)
    }
    render(){
        return(
            <form onSubmit= {this.onInputSubmit} className="search-form">
                <input type="text" placeholder="Search..." onChange={this.onInputChange} value={this.state.inputValue}/>
                <div className="search-form__icon" onClick= {this.onInputSubmit}>
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </form>
        )
    }
}

export default SearchBar;