//1
function addFL(){
    var result = 0;
    result += arguments[0];
    result += arguments[arguments.length-1];
    return result;
}

console.log(addFL(3, 4, 7, 3));

//2
const arr = [1, 3, -5 , 2 ,4, -6, -2, -4, -1, 5]

function func(arr, checkpos, checkdivisable, y){
    for (let i = 0; i < arr.length; i++) {
        if (checkpos(arr[i]) == true && checkdivisable(arr[i], y) == true) {
            console.log(arr[i]);
        }
    }
}

function checkpos(x){
    if (x > 0) {
        return true;
    }
    return false;
}

function checkdivisable(x, y){
    if (x % y === 0){
        return true;
    }
    return false;
}
func(arr, checkpos, checkdivisable, 3);

//