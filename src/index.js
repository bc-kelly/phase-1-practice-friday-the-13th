//For each movie returned from http://localhost:3000/movies create an image and add it to the movie-list nav element.
//As soon as the page loads, we should see the details of the first movie in the dataset.
//When you click on each movie image, you should populate the detail area with the title, release_year, description, watched, and blood_amount for the movie that was clicked.
//If the value of 'watched' is false, the button should say 'Unwatched'. If the value is true, then the button should say 'Watched'.
//When you click on the button in the details it should toggle between Watched or Unwatched depending on the value of watched for the movie currently being displayed.
//On the right side there's a form that allows the user to enter a number of blood drops to add to each movie (don't ask why). For each movie, I should be able to add more drops.

//works*** 
let movies;
let currentMovie;

let movieList = document.querySelector('#movie-list')
let detailWatched = document.querySelector('#watched')
let bloodAmount = document.querySelector('#amount')


fetch('http://localhost:3000/movies')
.then(resp => resp.json())
.then(movieData => {
    movies = movieData;
    console.log(movieData)

    addToList(movies);
    showMovieDetail(movieData[0]);
    addMoreDrops();
})

function addToList (movies){
    movies.forEach (movieObjects => {
        let movieImage = document.createElement('img')
        movieImage.src = movieObjects.image
        movieList.append(movieImage)

        movieImage.addEventListener('click', e => {
            console.log('clicked')

            showMovieDetail(movieObjects)
        })
    })
}

function showMovieDetail (allMovies) {
    currentMovie = allMovies;

    let detailImage = document.querySelector('#detail-image')
    detailImage.src = allMovies.image
    let detailTitle = document.querySelector('#title')
    detailTitle.textContent = allMovies.title
    let detailYearReleased = document.querySelector('#year-released')
    detailYearReleased.textContent = allMovies.release_year
    let detailDescription = document.querySelector('#description')
    detailDescription.textContent = allMovies.description 
    detailWatched.textContent = allMovies.watched ? "watched" : "unwatched"
    bloodAmount.textContent = allMovies.blood_amount

    changeWatched(allMovies)
}

function changeWatched (currentMovie) {
    detailWatched.addEventListener('click', e => {
        console.log("watched")
        currentMovie.watched = !currentMovie.watched
        detailWatched.textContent = currentMovie.watched ? "watched" : "unwatched"
    })
}

function addMoreDrops() {
    let bloodForm = document.querySelector('#blood-form')   
    bloodForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('submitted')

        let amountToAdd = e.target["blood-amount"].value;
        currentMovie.blood_amount += parseInt(amountToAdd);

        document.querySelector('#amount').textContent = currentMovie.blood_amount;

        e.target.reset();
    }) 
}





















//works***
// let movies;
// let movieListBackground = document.querySelector("#movie-list")
// let firstObj;
// let currentMovie;
// let firstMovieImage = document.querySelector("#detail-image")
// let moviePictures = document.createElement('img')
// let firstWatchedButton = document.querySelector('#watched') 
// let addBloodButton = document.querySelector('#add-blood-btn')

// fetch ('http://localhost:3000/movies')
// .then (resp => resp.json())
// .then (movieData => {
//     movies = movieData;
//     console.log(movieData)

//     movies.forEach(moviesObjects => {
//         // console.log(moviesObjects)
//         let moviePictures = document.createElement('img')
//         moviePictures.src = moviesObjects.image
//         movieListBackground.append(moviePictures)

//             moviePictures.addEventListener('click', e => {
//             console.log('clicked')
//             showFirstMovie(moviesObjects);
//             })
//     })
//     showFirstMovie(movies[0]);

//     addBloodDrops();
// })

// fetch ('http://localhost:3000/movies/1')
// .then (resp => resp.json())
// .then (firstMovieData => {
//     // console.log(firstMovieData)
//     firstObj = firstMovieData;
//     // let firstTitle = document.querySelector('#title')
//     // firstTitle.textContent = firstObj.title
//     // showFirstMovie(firstObj);
// })

// function showFirstMovie (movies) {
//     currentMovie = movies;

//     let firstTitle = document.querySelector('#title')
//     firstTitle.textContent = movies.title
//     let firstYearReleased = document.querySelector('#year-released')
//     firstYearReleased.textContent = movies.release_year
//     let firstDescription = document.querySelector('#description')
//     firstDescription.textContent = movies.description
//     let firstBloodAmount = document.querySelector('#amount')
//     firstBloodAmount.textContent = movies.blood_amount
//     let firstMovieImage = document.querySelector("#detail-image")
//     firstMovieImage.src = movies.image
//     let firstWatchedButton = document.querySelector('#watched') 
//     firstWatchedButton.textContent = movies.watched ? "Watched" : "Unwatched"

//     toggleWatched(movies)
// }

// function toggleWatched (currentMovie) {
//     firstWatchedButton.addEventListener('click', e => {
//         // console.log('clicked')
//         currentMovie.watched = !currentMovie.watched;
//         firstWatchedButton.textContent = currentMovie.watched ? "Watched" : "Unwatched"
//     })
// }

// function addBloodDrops () {
//     let bloodForm = document.querySelector('#blood-form')
//     bloodForm.addEventListener('submit', (e) => {
//         console.log(e);
//         e.preventDefault();

//         const amountToAdd = e.target["blood-amount"].value;
//         currentMovie.blood_amount += parseInt(amountToAdd);
//         //this is not working*****
//         // const bloodAmountToAdd = event.target["blood-amount"].value;
//         // currentMovie.blood_amount += parseInt(bloodAmountToAdd);

//         document.querySelector('#amount').textContent = currentMovie.blood_amount;

//         e.target.reset();

//     })
// }
