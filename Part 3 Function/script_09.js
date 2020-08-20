const number1 = 103;
const number2 = 72;
const number3 = 189;

// Write a function called getMax to get the maximum value
const getMax = (a,b,c)=>{
  let max = a;
  if( b > max){
    max = b; 
  } else if ( c > max){
    max = c;
  } else {
    console.log("Nihil");
  }
  return max;
}
getMax(number1, number2, number3);

// Print "The maximum value is __"
console.log(`The maximum value is ${getMax(103,72,189)}`);
