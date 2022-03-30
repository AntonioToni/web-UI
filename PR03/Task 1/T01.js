//1
function addFL() {
    var result = 0;
    result += arguments[0];
    result += arguments[arguments.length-1];
    return result;
}

console.log(addFL(3, 4, 7, 3));