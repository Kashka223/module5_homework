//вариант решения 1
let x; 
x = 10
if (typeof x === "number") {
  console.log ("X = Число");
} else if (typeof x === 'string') {
  console.log ("X = Строка");
} else if (typeof x === 'boolean') {
  console.log ("X = Логическое тип");
} else {
  console.log ("Тип Х не определен")
}


//вариант решения 2 
let x 
x = false 
switch (typeof x) {
  case ( 'number'):
    console.log ("X - Число");
    break;
  case ( 'string'):
    console.log ('X - Строка')
    break; 
  case ("boolean"):
    console.log ('X - логический тип')
    break;
  default:
    console.log ('Тип Х не определен')
    break;
}