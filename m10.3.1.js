let number = +prompt();


if(isNaN(number)) {
  console.log(number + " - это не число");
} else if(number  %2 == 0) {
  console.log(number + " - это четное число");
}
else if(number %2 != 0){
console.log(number + " - это нечетное число");
} 