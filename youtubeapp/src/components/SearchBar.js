import React from "react";
import './styles.css';



class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
      event.preventDefault();

      this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h2 className="label">Search for any Youtube Video</h2>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
