let numberOfFilms ;

function start() {
    numberOfFilms = +prompt("Сколько фильмов уже посмотрели?",'');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms>1000 || numberOfFilms <0 ) {
        numberOfFilms = +prompt("Сколько фильмов уже посмотрели?",'');
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?",''),
              b = prompt("На сколько оцените его? От 1 до 10",'');
    
    
        if (a != null && b != null && a != '' && b != '' && a.length<50 && b<10 && b>= 1 ){
            personalMovieDB.movies[a] = b;
            console.log("Done");
        }else{
            console.log("Eror");
            i--;
        }
    
    }    
}

rememberMyFilms();

function detectedPersonalLevel() {
    if ( personalMovieDB.count< 10){
        console.log('Просмотрено мало фильмов')
    }else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
        console.log('Вы киноман')
    }else {console.log('Произошла ошибка')}
}

detectedPersonalLevel();

function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i < 4; i++){
          personalMovieDB.genres[i - 1 ] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}



// const a = prompt("Один из последних просмотренных фильмов?",''),
    //   b = prompt("На сколько оцените его?",''),
    //   c = prompt("Один из последних просмотренных фильмов?",''), 
    //   d = prompt("На сколько оцените его?",'');
// 
// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 
// 
// 

