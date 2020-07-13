import "../styles/searchBar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
  state = { inputValue: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue)
  }
  render() {
    return (
      <div className="search-bar header--section">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="form__search-bar">
            <input
              type="text"
              onChange={({ target: { value } }) =>
                this.setState({ inputValue: value })
              }
              value={this.state.inputValue}
              placeholder="Search..."
              className="form__input"
            />
            <div className="form__search-icon" onClick={this.onFormSubmit} type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
