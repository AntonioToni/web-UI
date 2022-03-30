const arr = [1, 3, -5 , 2 ,4, -6, -2, -4, -1, 5]

function func(arr, checkpos, checkdivisable, y) {
    for (let i = 0; i < arr.length; i++) {
        if (checkpos(arr[i]) == true && checkdivisable(arr[i], y) == true) {
            console.log(arr[i]);
        }
    }
}

function checkpos(x) {
    if (x > 0) {
        return true;
    }
    return false;
}

function checkdivisable(x, y) {
    if (x % y === 0){
        return true;
    }
    return false;
}
func(arr, checkpos, checkdivisable, 3);