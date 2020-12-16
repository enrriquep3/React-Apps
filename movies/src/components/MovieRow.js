import React, { Component } from "react";
import "../App.css";

class MovieRow extends Component {
  viewMovie() {
    const url = `https://www.themoviedb.org/movie/${this.props.movie.id}`
    window.location.href = url;
  }

 
  render() {
    return (
      <table className="maintable" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster_src}  alt="moviePoster" width="180"  />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <h4>Ratings: {this.props.movie.vote_average}</h4> 
              <p>Release date: {this.props.movie.release_date}</p>
              <input className="button"
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="View"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
