'use strict'
// 1. Создайте цикл, который выведет в консоль только четные цифры от 10 до 0 (10-8-6-4-2-0)

//четные
for(let i = 10; i >= 0 ; i -= 2) {
    if(i % 2 === 0) {
    console.log (i);
    }
  }


//   2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в 
//   первой строчке выводилось :), во второй :):) и так далее

// так можно?:)
console.log(":)");
console.log(":):)");
console.log(":):):)");
console.log(":):):):)");
console.log(":):):):):)");

let i = 0;
let a = ":)"
let b = ":)"
while (i <= 5) {
  console.log(b);
  b = a + b;
  i++;
}

// 3. Создайте скрипт, который удалит все пробелы из строчки:
//   - Создайте переменную text со значением: Hello! I am a JS student!
//   - Выведите в консоль text, заменив в ней все пробелы на 1 (единица)
//   - Реализуйте с помощью метода replaceAll
//   - Пример в консоли: Hello!1I1am1a1JS1student!


let text = "Hello! I am a JS student!";
console.log(text.replaceAll(" ","1")); 











