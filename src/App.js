import React, { Component } from "react";
import  "./App.css"
import Filter from "./Filter";
import MovieList from "./MovieList";
import AddModal from "./AddModal";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "Parasite",
          image:
            "https://static.cinebel.be/img/movie/poster/full/1020491_fr_parasite_1563531796112.jpg",
          year: 2019,
          rating: 5
        },
        {
          title: "Interstellar",
          image:
            "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
          year: 2014,
          rating: 4
        },
        {
          title: "Joker",
          image:
            "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          year: 2019,
          rating: 3
        }
      ],
      newRating: 1,
      keyword: ""
    };
  }
  rateMovie = stars => {
    this.setState({
      newRating: stars
    });
  };
  searchMovie = movieName => {
    this.setState({
      keyword: movieName
    });
  };

  addMovie = newMovie => {
    this.setState({ movies: this.state.movies.concat(newMovie) });
  };
  render() {
    return (
      <div className="App">
        <Filter
          searchIt={word => this.searchMovie(word)}
          rateIt={num => this.rateMovie(num)}
        />
        <AddModal addMovie={newOne => this.addMovie(newOne)} />
        <MovieList
          movies={this.state.movies.filter(
            el =>
              el.rating >= this.state.newRating &&
              el.title
                .toUpperCase()
                .includes(this.state.keyword.toUpperCase().trim())
          )}
        />
      </div>
    );
  }
}

export default App;
