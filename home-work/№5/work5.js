/*var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

const arr1 = [...vegetables];
console.log(arr1);
*/
////////////////////////////////////////////////////////////////2.
/*var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

let arr = vegetables.join();
console.log(arr);

let arr1 = vegetables.toString();
console.log(arr1);
*/
///////////////////////////////////////////////////////////////3.
/*const num = prompt("Введите число", "");

function colonOdd(num) {
  return num
    .split("")
    .map((item, index, array) =>
      array[index] % 2 == 1 && array[index + 1] % 2 == 1 ? item + ":" : item
    )
    .join("");
}

console.log(colonOdd(num));
*/
/////////////////////////////////////////////4
/*
const str = prompt("Введите слово", "КаЖдЫй ОхОтНиК");

function changeRegister(str) {
  return str
    .split("")
    .map((symbol) =>
      symbol == symbol.toLowerCase()
        ? symbol.toUpperCase()
        : symbol.toLowerCase()
    )
    .join("");
}
alert(changeRegister(str));
*/

///////////////////////////////////////////////////////5.

// let arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates(arr));
////////////////////////////////////////6.
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];
// let result = arr1.map((item, index) => {
//   if (isNaN(arr2[index])) return item;
//   return item + arr2[index];
// });
// console.log(result);
//////////////////////////////////////////////7.

// let arr = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
// const countEdentic = (arr) => {
//   obj = {};
//   arr.forEach((element) =>
//     element in obj ? (obj[element] += 1) : (obj[element] = 1)
//   );
//   return Object.values(obj).reduce((acc, current) =>
//     current > 1 ? acc++ : acc
//   );
// };

// console.log(countEdentic(arr));
/////////////////////////////////////////////////////8

// var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// var numbers = numbers.sort((a, b) => a - b);

// console.log(numbers);
//////////////////////////////////////////////////////9
// var litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// const arr = (litmir) => {
//   return litmir
//     .map((item) => item.title)
//     .sort()
//     .join(" ");
// };
// console.log(arr(litmir));
///////////////////////////////////////////////10
var litmir = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
];

const arr = (array, key) => array.map((item) => item[key]).join();

console.log(arr(litmir, "title"));
console.log(arr(litmir, "author"));
