/* 10.1 Написать программу. в prompt вводится значение.
С помощью унарного плюса (арифметический оператор)
необходимо преобразовать его в число, затем проверить с помощью typeof,
принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Добавить проверки на Nan and Null
*/
let input = prompt ('Enter a numeric value: ');
if (input !== null) {
    let num = +input;
//typeof for NaN is Number. NaN is technically a numeric data type.
    console.log(typeof num);

    if (isNaN(num)) {
        console.log('Is not a number');
    } else if (num === 0) {
        console.log('Entered number is zero. Please, nter an Odd or Even number.');
    } else if (num % 2 === 0) {
        console.log('The entered number is even.');
    } else {
        console.log('The entered number is Odd');
    }
}
else {
    console.log('It seams an absence of a value.');
}