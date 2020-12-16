let tall = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 0 , 16 , 13 , 0 , 19];

liste(tall);

function liste(arr) {
  let sumOdd = 0;
  let sumEven = 0;
  let sumZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOdd++
    
    } else if (arr[i]===0) {
      sumZero++
    }
    else {
      sumEven++
    }
  }
  
  console.log("Odd : " + sumOdd);
  console.log("Even : " + sumEven);
  console.log ("Zero :" + sumZero);
}