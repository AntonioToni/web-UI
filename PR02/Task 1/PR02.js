//1
let number = prompt("Enter a number: ", Number);
if (number == 0) {
  console.log("Number is zero");
}
else if(number % 2 == 0) {
  console.log("Number is even");
}
else{
  console.log("Number is uneven");
}

number == 0 ? console.log("Number is zero.") : number % 2 == 0 ? console.log("Number is even.") : console.log("Number is uneven.")

//2
let expression;
switch (expression) {
  case "value1":
    console.log("This is value1")
    break;
  case "value2":
    console.log("This is value2")
    break;
  case "value2":
    console.log("This is value2")
    break;
  default:
    console.log("Value not set.")
}

//3
let nums = 155;
while (nums>105) {
  if (nums % 10 == 0) {
    console.log(nums);
  }
  nums--;
}

//4
let total = 0;
for (let index = 50; index < 100; index++) {
  total += index;
}
console.log(total);