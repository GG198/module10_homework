/* 10.6 Дан массив. Проверить, одинаковые ли элементы в массиве
   вывести результат true или false в консоль.
*/
let arr = [3, 3, 3];
for(i=0; i < arr.length - 1; i++){
    if (arr[i] != arr[i+1]){
        isEqual = false;
    }
    else{
        isEqual = true;
    }
}
console.log("All elements are equal is: " + isEqual);

//Using the .every
let allEqual = arr => arr.every(val => val === arr[0]);
let result = allEqual([3, 4, 3]);
console.log(result);