////////////////////////////////////
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
// }

// let worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

///////////////////////////////////////////////////////////////////////////

class MyString {
  constructor() {}
  reverse(s) {
    return s.split("").reverse().join("");
  }
  ucFirst(b) {
    return b[0].toUpperCase() + b.slice(1);
  }
  ucWords(c) {
    return c
      .split(/\s+/)
      .map((f) => f[0].toUpperCase() + f.slice(1))
      .join(" ");
  }
}

let str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'
