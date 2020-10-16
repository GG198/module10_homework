//10.5 Вывести количество элементов массива, затем перебрать его
//вывести в консоль каждый элемент массива.
let arr = [1, 2, 3, 4];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    console.log("Array element: " + arr[i]);
    sum += arr[i];
}
console.log("The number of array elements is: " + sum);