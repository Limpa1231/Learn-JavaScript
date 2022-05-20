
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

// const discount = 0.8;
// const ToyBear = 1500;

// function price(count, amount){
//     return count*amount;
// }

// function fixPrice(cost){
//      console.log(cost*discount);
// }

// const res = price(5,ToyBear);

// console.log(fixPrice(res));

// const lest = (a,b) => a*b;

// console.log(lest (4, 5));


//Объекты
// const options = {
    // name: 'swift',
    // widht: 1024,
    // height: 1024,
    // colors: {
        // border: 'yellow',
        // background: 'red'
    // },
    // makeTest: function() {
        // console.log('Welcome to the site!')
    // } 
// };
// 
// const {border, background} = options.colors;
// 
// console.log(border,background);
// 
// options.makeTest();
// console.log(Object.keys(options).length);
// 
// let counter = 0;
// 
// for (let key in options){
    // if(typeof(options[key]) === 'object'){
        // for (let i in options[key]) {
            // console.log(`Свойство ${i} имеет значение ${options[key][i]}`)}
            // counter++;
        // } else{
            // console.log(`Свойство ${key} имеет значение ${options[key]}` )
            // counter++;
        // }
    // };
// 
// console.log(options.name);
// console.log(counter);


//Массивы и псевдомассивы
// const arr = [ 1, 4, 6, 8 ,3, 2];
// 
// arr.sort(compareNum);
// console.log(arr);
// 
// function compareNum(a, b){
    // return a - b; 
// 
// }

// arr.pop();
// arr.push(14);
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
// }

// arr.forEach(function(item,i, arr){
    // console.log(`индекс элемента: ${i} соответвует элементу: ${item} внутри массива ${arr}`)
// })
// 
// arr.reverse();
// 
// console.log(arr);
// for (let value of arr){
    // console.log(value);
// }
// const str = prompt("Введите продукты",'');
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

function createCounter () {
    let counter = 0;

    const myFunction = function() {
        counter = counter +1 ;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment;
const c2 = increment;
const c3 = increment;