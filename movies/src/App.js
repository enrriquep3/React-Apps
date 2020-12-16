import "./App.css";
import React, { Component } from "react";
import MovieRow from "./MovieRow";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("this is talfy");

    //   const movies = [
    //     { id:0, poster_src:"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Movies_Coverart.jpg/220px-The_Movies_Coverart.jpg", title: "Avengers", overview: "affsk;lkafkalsfko;rojrgogrjgrjgr" },
    //     {id:1, poster_src:"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Movies_Coverart.jpg/220px-The_Movies_Coverart.jpg", title: "Avengers1", overview: "affsk;lkafkalsfko;rojrgogrjgrjgr" }
    //   ]

    // var movieRows = []
    //   movies.forEach((movie) => {
    //     console.log(movie.id)
    //      const movieRow = <MovieRow movie={movie} />
    //     movieRows.push(movieRow)
    //   })
    //   this.state = {rows: movieRows}

    this.performSearch("lord");
  }
  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString = `https://api.themoviedb.org/3/search/movie?&api_key=c4e306d8d41a0a0a4c7120434c43d3c2&query=${searchTerm}`;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log(" talfy done");
        // console.log(searchResults);
        const results = searchResults.results;
        //console.log(results[0])

        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
          // console.log(movie.poster_path);
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
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
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
        <input
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
