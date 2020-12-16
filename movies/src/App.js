import "./App.css";
import React, { Component } from "react";
import MovieRow from "./components/MovieRow";
import $ from "jquery";
import {DelayInput} from 'react-delay-input';

class App extends Component {
  constructor(props) {
    super(props);
    this.timeOut = 0;
    this.state = {
      initial: [],
    };
  }

  performSearch(searchTerm) {
    const urlString = `https://api.themoviedb.org/3/search/movie?&api_key=c4e306d8d41a0a0a4c7120434c43d3c2&query=${searchTerm}`;
   
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results;
        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data ");
      },
    });
  }

  searchChangeHandler(event) {
    const boundObject = this
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }
  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://img.icons8.com/cotton/64/000000/film-reel.png"
                  alt="movie icon"
                />
              </td>
              <td>
                <h1>Movies Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <DelayInput
          minLength={2}
          delayTimeout={400}
          onChange={this.searchChangeHandler.bind(this)}
          className="inputBar"
          placeholder="Search for your favorite Movie"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
