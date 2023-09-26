const firstNumber = +prompt('Please, enter first number');
const secondNumber = +prompt('Please, enter second number');
const thirdNumber = +prompt('Please, enter third number');
if(isNaN(firstNumber) === true || isNaN(secondNumber) === true || isNaN(thirdNumber) === true) {
  alert('Your entered value is not a number')
} else {
  const average = (firstNumber + secondNumber + thirdNumber) / 3;
  alert('Your average is: ' + average);
}
  
  
