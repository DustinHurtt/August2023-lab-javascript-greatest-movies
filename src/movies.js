// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => {
        return movie.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" 
        && movie.genre.includes('Drama')
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoreSum = moviesArray.reduce((sum, movie) => {
        if (!movie.score) {
            return sum + 0
        }
        return sum + movie.score
    }, 0)
    let average = scoreSum/moviesArray.length
    return Number(average.toFixed(2)) || 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = moviesArray.map(movie => movie)
    return newArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titles = moviesArray.map((movie) => {
        return movie.title
    })
    let sorted = titles.sort((a,b) => a.localeCompare(b))
    return sorted.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const timeFormatArr = moviesArray.map(function(movie) {
        if (movie.duration.indexOf("h") >= 0 && movie.duration.indexOf("min") >= 0) {
          const hour = Number(movie.duration[0]);
          const minutes = Number(movie.duration[3] + movie.duration[4]);
          const durationInMin = hour * 60 + minutes;
          return {movie, duration: durationInMin};
        } else if (movie.duration.indexOf("h") >= 0) {
          const hour = Number(movie.duration[0]);
          const durationInMin = hour * 60;
          return {movie, duration: durationInMin};
        } else {
          const minutes = Number(movie.duration[0] + movie.duration[1]);
          const durationInMin = minutes;
          return {movie, duration: durationInMin};
        }
      });
      
      return timeFormatArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length==0){return null}
    let years = Array.from(new Set(moviesArray.map(m => m.year)));
    let avgYears = years.map(function(y) {
      let filteredArray= moviesArray.filter(m => m.year == y);
      let yearAvg = {};
      yearAvg['year']=y
      yearAvg['score']=scoresAverage(filteredArray);
      return yearAvg;
      }); 
    let bestYear = avgYears.sort(function(a,b) {
        if(b.score!=a.score){return b.score-a.score} else{return a.year-b.year};})[0];
    return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`
}
