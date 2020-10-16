/* 10.4 Записать в переменную случайное целое число в диапазоне [0; 100].
Используйте объект Math.
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(101));