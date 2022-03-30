function sum(UserEnter, amount, add){
    let total = 0;
    for (let i = 0; i < amount; i++) {
        total = add(total,UserEnter());
    }
    return total;
}

function UserEnter() {
    let x = prompt("Enter a number:");
    let xx = parseInt(x);
    return xx;
}

function add(total, x) {
    total += x;
    return total;
}

console.log(sum(UserEnter, 4, add));