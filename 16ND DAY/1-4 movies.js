function movies(arr) {
  let movies = [];
  for (let command of arr) {
    if (command.includes("addMovie")) {
      let tokens = command.split("addMovie ");
      let movieTitle = tokens[1];
      movies.push({ name: movieTitle });
    } else if (command.includes("directedBy")) {
      let [searchedMovieTitle, movieDirector] = command.split(" directedBy ");
      let movieObj = movies.find(movie => movie.name === searchedMovieTitle);
      if (movieObj) {
        movieObj.director = movieDirector;
      }
    } else if (command.includes("onDate")) {
      let [searchedMovieTitle, movieDate] = command.split(" onDate ");
      let movieObj = movies.find(movie => movie.name === searchedMovieTitle);
      if (movieObj) {
        movieObj.date = movieDate;
      }
    }
  }
  for (let movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen"
]);
