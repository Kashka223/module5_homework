//задача 1
const promt = prompt ('Введите число')
const result= +promt
if(typeof result ==='number' && !isNaN(result)) {
  if (result % 2 === 0){  
    alert ('Четное число')
  } else {
    alert ('Нечетное число') }
  }
  else {
    alert ('Упс, кажется, вы ошиблись')
  }

  