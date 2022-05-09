//advanced function (*)  1) 
//Создайте функцию, которая будет вычислять объем и площадь 



function resultCube (lenght) {
    if (typeof(lenght) !== 'number' || lenght < 0 || !Number.isInteger(lenght)){
        return console.log('Возникла ошибка~');
    }

    let volume,
        square;
;
    volume = Math.pow(lenght,3);
    square = Math.pow(6*lenght,2);

    return console.log(`Объём куба: ${volume} м3, \n Площадь куба: ${square} м2 `)
}

resultCube(7);


function Place(seatNumber){
    if(typeof(seatNumber)!== 'number' || seatNumber<0 || !Number.isInteger(seatNumber)){
        return console.log('Возникла ошибка. Проверьте введённое вами место.');
    }

    if(seatNumber === 0 ||seatNumber>36 ){
        return console.log ('Выбранно несуществующее место');
    }

    for (let i = 4; i < 36; i=i + 4){
        if(seatNumber <= i){
            return console.log(`Ваш номер купе: ${Math.ceil(i / 4)}`);
        }
    }
}

Place(0);