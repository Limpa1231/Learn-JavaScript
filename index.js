
// const numberOfFilms =prompt("Сколько фильмов уже посмотрели?",'');
// 
// const personalMovieDB = {
    // count: numberOfFilms,
    // movies: {},
    // actors: {},
    // genres: [],
    // privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?",''),
    //   b = prompt("На сколько оцените его?",''),
    //   c = prompt("Один из последних просмотренных фильмов?",''), 
    //   d = prompt("На сколько оцените его?",'');
// 
// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 
// 

// for (let i = 0; i < 2; i++){
    // const a = prompt("Один из последних просмотренных фильмов?",''),
        //   b = prompt("На сколько оцените его? От 1 до 10",'');
// 
// 
    // if (a != null && b != null && a != '' && b != '' && a.length<50 && b<10 && b>= 1 ){
        // personalMovieDB.movies[a] = b;
        // console.log("Done");
    // }else{
        // console.log("Eror");
        // i--;
    // }
// 
    // 
// }
// 
// if ( personalMovieDB.count< 10){
    // console.log('Просмотрено мало фильмов')
// }else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
    // console.log('Вы киноман')
// }else {console.log('Произошла ошибка')}
// 
// console.log(personalMovieDB);
// 
// 

// 
// const kola = 5,
    //   pepsi = 3;
// 
// if(kola > 2 && pepsi) {
    // console.log('Напился до отвала')
// }else {
    // console.log('Пойдёт, но могло быть и лучше')
// };
// 
//2

// for (let i = 0; i < 1; i++){
    // console.log('*');
    // for (let j = 2; j < 3; j++){
        // console.log(i);
// 
    // }
// }

// let result = '';
// const lenght = 7;
// 
// for (let i = 1; i < lenght; i++) {
// 
    // for(let j = 0 ; j< i; j++){
        // result += "*";
    // }
// 
    // result += '\n';
// }
// 
// 
// console.log(result);
// 
// 
// 
// first: for (let i = 0; i < 3; i++){
    // console.log(`first level:${i}`);
    // for (let j = 0; j < 3; j++){
        // console.log(`second level:${j}`);
        // for (let k = 0; k < 3; k++){
            // if(k === 2) continue first;
            // console.log(`third level:${k}`);
        // }
    // }   
// }

const discount = 0.8;
const ToyBear = 1500;

function price(count, amount){
    return count*amount;
}

function fixPrice(cost){
     console.log(cost*discount);
}

const res = price(5,ToyBear);

console.log(fixPrice(res));

const lest = (a,b) => a*b;

console.log(lest (4, 5));