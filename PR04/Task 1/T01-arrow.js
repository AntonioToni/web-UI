//arrow functions
let core = () => {
    let sum = 0;
    let x;
    do {
        x = UserEnter();
        if (x != 0 && checkEven(x) === true) {
            sum = sum + x;
        }
    } while (x != 0);
    return sum;
};

let total = 0;

let checkEven = x => {
    if (x % 2 === 0){
        return true;
    }
    total = total + 1;
    return total;
};

let UserEnter = () => {
    let x = prompt("Enter a number:");
    let xx = parseInt(x);
    return xx;
};


let sumEven = core();
let totalUneven = checkEven();

console.log("Total uneven: ", totalUneven, "Sum of even numbers: ", sumEven)