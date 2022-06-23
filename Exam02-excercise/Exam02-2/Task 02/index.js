function getSecondLowestAndGreatest(arr) {
    arrsort = arr.sort();
    let newarr = [];
    newarr.push(arrsort[1]);
    newarr.push(arrsort[arrsort.length - 2]);
    return newarr;
}

console.log(getSecondLowestAndGreatest([1, 2, 3, 4, 5]))