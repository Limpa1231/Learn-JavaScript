//advanced function (*)  1) 
//Создайте функцию, которая будет вычислять объем и площадь 



// function resultCube (lenght) {
    // if (typeof(lenght) !== 'number' || lenght < 0 || !Number.isInteger(lenght)){
        // return console.log('Возникла ошибка~');
    // }
// 
    // let volume,
        // square;
// ;
    // volume = Math.pow(lenght,3);
    // square = Math.pow(6*lenght,2);
// 
    // return console.log(`Объём куба: ${volume} м3, \n Площадь куба: ${square} м2 `)
// }
// 
// resultCube(7);
// 

// function Place(seatNumber){
    // if(typeof(seatNumber)!== 'number' || seatNumber<0 || !Number.isInteger(seatNumber)){
        // return console.log('Возникла ошибка. Проверьте введённое вами место.');
    // }
// 
    // if(seatNumber === 0 ||seatNumber>36 ){
        // return console.log ('Выбранно несуществующее место');
    // }
// 
    // for (let i = 4; i < 36; i=i + 4){
        // if(seatNumber <= i){
            // return console.log(`Ваш номер купе: ${Math.ceil(i / 4)}`);
        // }
    // }
// }
// 
// Place(0);
// const personalPlanPeter = {
    // name: "Peter",
    // age: "29",
    // skills: {
        // languages: ['ru', 'eng'],
        // programmingLangs: {
            // js: '20%',
            // php: '10%',
            // java: '50%'
        // },
        // exp: '1 month'
    // },
    // showAgeAndLangs: function(plan) {
        // const {age} = plan;
        // const {languages} = plan.skills;
        // let str = `Мне ${age} и я владею языками: `;
// 
        // languages.forEach(function(lang) {
            // str += `${lang.toUpperCase()} `;
        // });
// 
        // return str;
    // }
// }; 
// 
// function showExperience(plan) {
    // const {exp} = plan.skills;
    // return exp;
// };
// 
// console.log(showExperience(personalPlanPeter));
// 
// function showProgrammingLangs(plan) {
    // let str = '';
    // const {programmingLangs} = plan.skills;
    // for (let key in programmingLangs) {
        // str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    // }
// 
    // return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));
// 
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// const shoppingMallData = {
    // shops: [
        // {
            // width: 10,
            // length: 5
        // },
        // {
            // width: 15,
            // length: 7
        // },
        // {
            // width: 20,
            // length: 5
        // },
        // {
            // width: 8,
            // length: 10
        // }
    // ],
    // height: 5,
    // moneyPer1m3: 30,
    // budget: 50000
// }
// 
// function isBudgetEnough(data) {
    // let square = 0;
    // let volume = 0;
// 
    // data.shops.forEach(shop => {
        // square += shop.width * shop.length;
    // });
// 
    // volume = data.height * square;
// 
    // if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        // return 'Бюджета достаточно';
    // } else {
        // return 'Бюджета недостаточно';
    // }
// }
// 
// isBudgetEnough(shoppingMallData);
// 
// 

const students = ['Peter', 'Anna','Jack','Roza','Mars','Daria','Simen','Jonh','Nikolya','Olesya'];

function sortStudentsByGroups(student) {
    student.sort();
    const a =[], b =[], c = [], rest = [];

    for (let i = 0; i < student.length; i++){
        if (i <3 ){
            a.push(student[i]);
        }else if (i < 6){
            b.push(student[i]);
        }else if (i < 9){
            c.push(student[i]);
        }else {
            rest.push(student[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);

console.log(sortStudentsByGroups(students));

