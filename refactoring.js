
const personalMovieDB = {
    count: 0 ,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов уже посмотрели?",'');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count>1000 || personalMovieDB.count <0 ) {
            personalMovieDB.count = +prompt("Сколько фильмов уже посмотрели?",'');
        }
    },

     rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?",'').trim(),
                  b = prompt("На сколько оцените его? От 1 до 10",'');
        
        
            if (a != null && b != null && a != '' && b != '' && a.length<50 && b<10 && b>= 1 ){
                personalMovieDB.movies[a] = b;
                console.log("Done");
            }else{
                console.log("Eror");
                i--;
            }
    
        }    
    },
    detectedPersonalLevel: function() {
        if ( personalMovieDB.count< 10){
            console.log('Просмотрено мало фильмов')
        }else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
            console.log('Вы киноман')
        }else {console.log('Произошла ошибка')}
    },
    showMyDB: function(hidden)  {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisiableMyDB: function () {
        if (personalMovieDB.privat ){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }

    },
     writeYourGenres: function() {
        for (let i = 1; i < 2; i++){
            let genres = prompt(`Введите ваши любимые жанры через запятую `).trim().toLowerCase();

            if (genres === '' || genres === null ){
                console.log("Введены некоректные данные");
                i--;
            }else{
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};



// const a = prompt("Один из последних просмотренных фильмов?",''),
    //   b = prompt("На сколько оцените его?",''),
    //   c = prompt("Один из последних просмотренных фильмов?",''), 
    //   d = prompt("На сколько оцените его?",'');
// 
// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 
// 
// 

