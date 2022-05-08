const numberOfFilms =prompt("Сколько фильмов уже посмотрели?",'');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?",''),
      b = prompt("На сколько оцените его?",''),
      c = prompt("Один из последних просмотренных фильмов?",''), 
      d = prompt("На сколько оцените его?",'');

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d; 


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

if ( personalMovieDB.count< 10){
    console.log('Просмотрено мало фильмов')
}else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
    console.log('Вы киноман')
}else {console.log('Произошла ошибка')}

console.log(personalMovieDB);

