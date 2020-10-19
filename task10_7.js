//10.7 Вывести в консоль количество чётных и нечётных элементов в массиве
//количество нулей
//исключить из массива NaN и Null

let arr = [1, 2, 3, 0,"n",null, 4, "m", 5, "45", NaN, false, true];
let countNull = 0;
let countEven = 0;
let countOdd = 0;
let countNan = 0;
for(let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        if (arr[i] === 0) {
            countNull ++;
        } else if (arr[i] % 2 === 0) {
            countEven ++;
        } else {
            countOdd ++;
        }
    }
}
console.log("Total of odd numbers are: " + countOdd);
console.log("Total of even numbers are: " + countEven);
console.log("Total of 0 numbers are: " + countNull);

// Задание выполнено не верно, т.к. многие значения учитываются неправильно (например, строки, содержащие числа, false/true и т.д.). Чтобы верно решить задачу, нужно отсеять все значения, которые не являются числами. Для этого нужно обязательно использовать проверку на typeof и isNaN. Выше исправила на верный вариант