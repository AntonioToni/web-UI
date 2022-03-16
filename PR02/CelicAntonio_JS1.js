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

number==0 ? console.log("Number is zero.") : number%2 == 0 ? console.log("Number is even.") : console.log("Number is uneven.")