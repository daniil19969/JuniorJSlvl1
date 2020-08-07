//2 задание
message = "Hello World";

//3 задание
alert(message);

//4 задание
let b = Boolean(" ");
let n = -1;

//5 задание
alert(b + n);

//6 задание
let login = prompt("Введите логин:", "");
login == "Сотрудник"
  ? alert("Привет")
  : login == "Директор"
  ? alert("Здравствуйте")
  : login == ""
  ? alert("Нет логина")
  : alert("");

//7 задание
let age = prompt("Введите число:", "");
if (age > 17 && age < 81) alert("Верно!");
else alert("Неверно!");

//8 задание
//8.1
for (i = 1; i <= 9; i = i + 2) {
  alert(i);
}
//8.2
let k = 1;
while (k <= 9) {
  alert(k);
  k = k + 2;
}

//9 задание
function max(
  a = +prompt("Введите первое число:", ""),
  b = +prompt("Введите второе число:", "")
) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

alert(max());
