//advanced function (*)1) 
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

    return console.log(`Объём данного куба ${volume}, \n Площадь куба ${square}`
    )
}

resultCube(7);
