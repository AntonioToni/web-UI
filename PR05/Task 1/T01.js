function printNumbers() {
    let temp = 500;
    setTimeout(function print() {
        console.log(temp);
        if (temp < 1000) {
            setTimeout(print,1000);
        }
        else if(temp < 1500){
            setTimeout(print,2000);
        }
        temp+=100;
    }, 2000);
}

printNumbers();