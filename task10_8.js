/* 10.8 Создайте произвольный массив Map.
Получите его ключи и выведите в консоль все значения
в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/
let auto = new Map();
//Добавляю в массив несколько пар ключ/значение.
auto
    .set('BMV', 'blue')
    .set('Volvo', 'red')
    .set('Tesla', 'violet')
    .set('Cadillac', 'white');
console.log('Iterating over auto array using forEach method:')
//перебор ассоциативного массива с помощью метода forEach
auto.forEach((value, index) => {
    console.log(`Key - ${index} ; Value - ${value}`);
})
console.log('\nOr using method entries:');
//Перебор записей ассоциативного массива с использованием метода entries
for (let pair of auto.entries()) {
    console.log(`Ключ = ${pair[0]}, Значение = ${pair[1]}`);
}
