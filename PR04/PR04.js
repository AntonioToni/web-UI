//1

function core(){
    let sum = 0;
    let x;
    do {
        x = UserEnter()
        if (x != 0 && checkEven(x) === true) {
            sum = sum + x;
        }
    } while (x != 0);
    return sum;
}

let total = 0;

function checkEven(x){
    if (x % 2 === 0){
        return true;
    }
    total = total + 1;
    return total;
}

let sumEven = core();
let totalUneven = checkEven();

function UserEnter() {
    let x = prompt("Enter a number:");
    let xx = parseInt(x);
    return xx;
}
console.log("Total uneven: ", totalUneven, "Sum of even numbers: ", sumEven)