import "./main.scss";
import { Button } from "./components/Button/Button";
const add123 = (a, b) => a + b;

const root = document.querySelector("#root");

root.insertAdjacentHTML("beforebegin", Button());

const res = add123(222, 3);
console.log("root");

//Задание №2
/*let hash = "";
for (let i = 0; i < 8; i++) {
  hash = hash + "\n";
  for (let j = 0; j < 8; j++) {
    if ((j + i) % 2 == 0) {
      hash += "#";
    } else {
      hash += " ";
    }
  }
}
alert(hash);
*/
//Задание №3

/*let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);
*/

//Домашнее задание
let surname;
do {
  surname = prompt("Ваша фамилия?", "");
} while (surname == "" || surname == undefined);

let name;
do {
  name = prompt("Ваше имя", "");
} while (name == "" || name == undefined);

let middleName;
do {
  middleName = prompt("Ваше отчество", "");
} while (middleName == "" || middleName == undefined);

let age;
do {
  age = prompt("Ваш возраст в годах", "");
} while (age == "" || age == undefined || age >= 120 || age <= 0);

let ageInDays = 365 * age;
let ageInFiveYears = 5 + Number(age);

let gender;
let genderMan = confirm("Ваш пол - мужской?");
if (genderMan == true) {
  gender = "мужской";
} else {
  gender = "женский";
}

let youAreRetired = Number(age);
if (youAreRetired <= 65) {
  youAreRetired = "нет";
} else {
  youAreRetired = "да";
}

alert(`
Ваше ФИО: ${surname} ${name} ${middleName} 
Ваш возраст в годах: ${age} 
Ваш возраст в днях: ${ageInDays} 
Через 5 лет вам будет: ${ageInFiveYears}  
Ваш пол: ${gender}  
Вы на пенсии: ${youAreRetired}`);
