function getSecondLowestAndGreatest(arr) {
    arrsort = arr.sort()
    console.log(arrsort[1], arrsort[arrsort.length - 2])
}

getSecondLowestAndGreatest([1, 2, 3, 4, 5])