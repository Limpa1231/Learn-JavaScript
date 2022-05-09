
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

const options = {
    name: 'swift',
    widht: 1024,
    height: 1024,
    colors: {
        border: 'yellow',
        background: 'red'
    }
};

console.log(options[name]);