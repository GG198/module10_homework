// 10.3 Вывести в консоль перевёрнутый вариант. (П-р:"Hello" -> "olleH")
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello world"));